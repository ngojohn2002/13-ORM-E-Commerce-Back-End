// Purpose: To define the routes for the Category model

// Import the necessary modules
const router = require("express").Router(); // Import the Router class from express
const { Category, Product } = require("../../models"); // Import the Category and Product models

// The `/api/categories` endpoint

router.get("/", (req, res) => { // Define the route to get all categories
  Category.findAll({ // Find all categories 
    include: [Product], // Include the associated Products
  })
    .then((categories) => res.json(categories)) // Return the results as JSON
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

router.get("/:id", (req, res) => { // Define the route to get a single category by its `id` value
  Category.findByPk(req.params.id, { // Find a single category by its `id`
    include: [Product], // Include the associated Products
  })
    .then((category) => { // Handle the results of the query
      if (!category) { // If no category is found with the given `id` value
        return res // Return a 404 Not Found status with an error message
          .status(404) 
          .json({ message: "No category found with this id!" }); 
      }
      res.json(category); // Return the results as JSON
    })
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

router.post("/", (req, res) => { // Define the route to create a new category
  Category.create(req.body) // Create a new category with the data from the request body
    .then((category) => res.status(200).json(category)) // Return the results as JSON
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

router.put("/:id", (req, res) => { // Define the route to update a category by its `id` value
  Category.update(req.body, { // Update the category data with the data from the request body
    where: { // Define the criteria for updating the category
      id: req.params.id, // Get the `id` value from the request parameters
    }, 
  }) 
    .then(([updatedRows]) => { // Handle the results of the query
      if (updatedRows === 0) { // If no rows were updated (i.e., no category found with the given `id` value)
        return res // Return a 404 Not Found status with an error message
          .status(404) 
          .json({ message: "No category found with this id!" }); 
      }
      res.json({ message: "Category updated successfully" }); // Return a success message as JSON
    })
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors 
});

router.delete("/:id", (req, res) => { // Define the route to delete a category by its `id` value
  Category.destroy({ // Delete the category data
    where: { // Define the criteria for deleting the category
      id: req.params.id, // Get the `id` value from the request parameters
    },
  })
    .then((deletedRows) => { // Handle the results of the query
      if (deletedRows === 0) { // If no rows were deleted (i.e., no category found with the given `id` value)
        return res // Return a 404 Not Found status with an error message
          .status(404)
          .json({ message: "No category found with this id!" });
      }
      res.json({ message: "Category deleted successfully" }); // Return a success message as JSON
    })
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

module.exports = router; // Export the router for use in other files
