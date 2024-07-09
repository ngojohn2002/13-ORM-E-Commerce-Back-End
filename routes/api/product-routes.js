// Purpose: To define routes for CRUD operations on the Product model

// Import necessary modules and models
const router = require("express").Router(); // Import the Router class from express
const { Product, Category, Tag, ProductTag } = require("../../models"); // Import the Product, Category, Tag, and ProductTag models

// Route to GET all products along with their associated Category and Tag data
router.get("/", async (req, res) => {
  try {
    // Fetch all products
    // Include associated Category and Tag data
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Tag, through: ProductTag }], 
    });
    // Send the fetched data as JSON response
    res.json(products);
  } catch (err) {
    // Log errors to console for debugging
    console.error(err);
    // Send 500 Internal Server Error status with error message
    res.status(500).json(err);
  }
});

// Route to GET a single product by its ID along with its associated Category and Tag data
router.get("/:id", async (req, res) => { 
  try {
    // Fetch product by its primary key (id)
    // Include associated Category and Tag data
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });

    // If no product found, send 404 Not Found status with error message
    if (!product) {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }

    // Send the fetched data as JSON response
    res.json(product);
  } catch (err) {
    // Log errors to console for debugging
    console.error(err);
    // Send 500 Internal Server Error status with error message
    res.status(500).json(err);
  }
});

// Route to CREATE a new product
router.post("/", async (req, res) => {
  try {
    // Create new product with data from request body
    const product = await Product.create(req.body);

    // If tags are provided, create associations in ProductTag table
    if (req.body.tagIds && req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => { 
        return { 
          product_id: product.id,
          tag_id,
        };
      });
      await ProductTag.bulkCreate(productTagIdArr); // Bulk create associations in ProductTag table
    }

    // Send the created product data as JSON response
    res.status(201).json(product);
  } catch (err) {
    // Log errors to console for debugging
    console.error(err);
    // Send 400 Bad Request status with error message
    res.status(400).json(err);
  }
});

// Route to UPDATE an existing product by its ID
router.put("/:id", async (req, res) => {
  try {
    // Update product data in database
    const [updatedRows] = await Product.update(req.body, {
      where: { id: req.params.id },
    });

    // If no rows were updated, send 404 Not Found status with error message
    if (updatedRows === 0) {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }

    // If tags are provided, update associations in ProductTag table
    if (req.body.tagIds && req.body.tagIds.length) {
      // Get current product-tag associations
      const productTags = await ProductTag.findAll({
        where: { product_id: req.params.id },
      });
      const productTagIds = productTags.map(({ tag_id }) => tag_id);

      // Determine which tags to add and which to remove
      const newProductTags = req.body.tagIds // Filter out tags that are already associated with the product
        .filter((tag_id) => !productTagIds.includes(tag_id)) // Map the tag IDs to an array of objects
        .map((tag_id) => { // Map the tag IDs to an array of objects
          return { // Return an object with the product ID and tag ID
            product_id: req.params.id, // Set the product ID to the current product's ID
            tag_id, // Set the tag ID to the current tag's ID
          };
        });
      const productTagsToRemove = productTags // Filter out tags that are no longer associated with the product
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id)) // Map the tag IDs to an array of IDs
        .map(({ id }) => id); // Perform updates in ProductTag table

      // Perform updates in ProductTag table
      await Promise.all([ // Perform updates in ProductTag table
        ProductTag.destroy({ where: { id: productTagsToRemove } }), // Remove tags that are no longer associated with the product
        ProductTag.bulkCreate(newProductTags), // Add new tags to the product
      ]);
    }

    // Send success message
    res.json({ message: "Product updated successfully" });
  } catch (err) {
    // Log errors to console for debugging
    console.error(err);
    // Send 500 Internal Server Error status with error message
    res.status(500).json(err);
  }
});

// Route to DELETE a product by its ID
router.delete("/:id", async (req, res) => {
  try {
    // Delete product from database
    const deletedRows = await Product.destroy({ 
      where: { id: req.params.id },
    });

    // If no rows were deleted, send 404 Not Found status with error message
    if (deletedRows === 0) {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }

    // Send success message
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    // Log errors to console for debugging
    console.error(err);
    // Send 500 Internal Server Error status with error message
    res.status(500).json(err);
  }
});

// Export the router to be used in the main application
module.exports = router;
