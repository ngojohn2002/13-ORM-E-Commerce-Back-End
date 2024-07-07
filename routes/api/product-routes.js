// ? This file will contain the API routes for the Product model

const router = require('express').Router(); // Import the Router class from express
const { Product, Category, Tag, ProductTag } = require('../../models'); // Import the Product, Category, Tag, and ProductTag models

// The `/api/products` endpoint 

// get all products
router.get('/', (req, res) => { 
  // find all products
  // be sure to include its associated Category and Tag data
  Product.findAll({ // Find all products
    include: [Category, { model: Tag, through: ProductTag, as: 'product_tags' }], // Include the associated Category and Tag data
  }) // Return the results as JSON
    .then((products) => res.json(products)) // Return the results as JSON
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

// get one product
router.get('/:id', (req, res) => { 
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  Product.findByPk(req.params.id, { // Find a product by its `id`
    include: [Category, { model: Tag, through: ProductTag, as: 'product_tags' }], // Include the associated Category and Tag data
  }) // Return the results as JSON
    .then((product) => res.json(product)) // Return the results as JSON
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

// create new product
router.post('/', (req, res) => { 
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body) // Create a new product with the data from the request body
    .then((product) => { // Return the results as JSON
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) { // Check if there are product tags
        const productTagIdArr = req.body.tagIds.map((tag_id) => { // Create an array of product tag IDs
          return { // Return an object with the product ID and tag ID
            product_id: product.id, // Get the product ID from the product
            tag_id, // Get the tag ID from the request body
          }; // Return the object
        }); // Return the array of product tag IDs
        return ProductTag.bulkCreate(productTagIdArr); // Create the product tag pairings
      } // Return the product
      // if no product tags, just respond
      res.status(200).json(product); // Return the results as JSON
    })
    .then((productTagIds) => res.status(200).json(productTagIds)) // Return the results as JSON
    .catch((err) => { // Catch and handle any errors
      console.log(err); // Log the error
      res.status(400).json(err); // Return the error as JSON
    }); // Return the error as JSON
}); // End of the route to create a new product

// update product data 
router.put('/:id', (req, res) => { 
  // update product data 
  Product.update(req.body, { // Update a product with the data from the request body
    where: { // Find the product by its `id` value
      id: req.params.id, // Get the `id` value from the request parameters
    }, // Return the results as JSON
  }) // Return the results as JSON
    .then((product) => { // Return the results as JSON
      if (req.body.tagIds && req.body.tagIds.length) { // Check if there are product tags
        
        ProductTag.findAll({ // Find all ProductTags
          where: { product_id: req.params.id } // Find the ProductTags by the product ID
        }).then((productTags) => { // Return the results as JSON
          // create filtered list of new tag_ids 
          const productTagIds = productTags.map(({ tag_id }) => tag_id); // Create an array of product tag IDs
          const newProductTags = req.body.tagIds // Create an array of new product tags
          .filter((tag_id) => !productTagIds.includes(tag_id)) // Filter out existing product tags
          .map((tag_id) => { // Map over the new product tags
            return { // Return an object with the product ID and tag ID
              product_id: req.params.id, // Get the product ID from the request parameters
              tag_id, // Get the tag ID from the new product tags
            };
          });

            // figure out which ones to remove
          const productTagsToRemove = productTags // Create an array of product tags to remove
          .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id)) // Filter out the product tags to remove
          .map(({ id }) => id); // Map over the product tags to remove

          return Promise.all([ // Run both actions
            ProductTag.destroy({ where: { id: productTagsToRemove } }), // Destroy the product tags to remove
            ProductTag.bulkCreate(newProductTags), // Create the new product tags
          ]);
        });
      }

      return res.json(product); // Return the results as JSON
    })
    .catch((err) => { // Catch and handle any errors
      // console.log(err); // Log the error
      res.status(400).json(err); // Return the error as JSON
    });
});

router.delete('/:id', (req, res) => { 
  // delete one product by its `id` value
  Product.destroy({ // Delete a product by its `id` value
    where: { // Find the product by its `id` value
      id: req.params.id, // Get the `id` value from the request parameters
    }, // Return the results as JSON
  }) // Return the results as JSON
    .then((product) => res.json(product)) // Return the results as JSON
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

module.exports = router; // Export the router for use in other files
