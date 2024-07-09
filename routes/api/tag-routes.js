// Purpose: This file defines the routes for the Tag model

// Import the necessary modules
const router = require("express").Router(); // Import the Router class from express
const { Tag, Product, ProductTag } = require("../../models"); // Import the Tag, Product, and ProductTag models

// The `/api/tags` endpoint

router.get("/", (req, res) => { // Define the route to get all tags
  Tag.findAll({ // Find all tags
    include: [Product], // Include the associated Product data
  })
    .then((tags) => res.json(tags)) // Return the results as JSON
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

router.get("/:id", (req, res) => { // Define the route to get a single tag by its `id` value
  Tag.findByPk(req.params.id, { // Find a single tag by its `id`
    include: [Product], // Include the associated Product data
  })
    .then((tag) => { // Handle the results of the query
      if (!tag) { // If no tag is found with the given `id` value
        return res.status(404).json({ message: "No tag found with this id!" }); // Return a 404 Not Found status with an error message
      }
      res.json(tag); // Return the results as JSON
    })
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

router.post("/", (req, res) => { // Define the route to create a new tag
  Tag.create(req.body) // Create a new tag with the data from the request body
    .then((tag) => res.status(200).json(tag)) // Return the results as JSON
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

router.put("/:id", (req, res) => { // Define the route to update a tag by its `id` value
  Tag.update(req.body, { // Update the tag data with the data from the request body
    where: { // Define the criteria for updating the tag
      id: req.params.id, // Get the `id` value from the request parameters
    },
  })
    .then(([updatedRows]) => { // Handle the results of the query
      if (updatedRows === 0) { // If no rows were updated (i.e., no tag found with the given `id` value) 
        return res.status(404).json({ message: "No tag found with this id!" }); // Return a 404 Not Found status with an error message 
      }
      res.json({ message: "Tag updated successfully" }); // Return a success message as JSON 
    })
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors 
});

router.delete("/:id", (req, res) => { // Define the route to delete a tag by its `id` value 
  Tag.destroy({ // Delete the tag data 
    where: { // Define the criteria for deleting the tag 
      id: req.params.id, // Get the `id` value from the request parameters
    },
  })
    .then((deletedRows) => { // Handle the results of the query 
      if (deletedRows === 0) { // If no rows were deleted (i.e., no tag found with the given `id` value) 
        return res.status(404).json({ message: "No tag found with this id!" }); // Return a 404 Not Found status with an error message 
      }
      res.json({ message: "Tag deleted successfully" }); // Return a success message as JSON 
    })
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

module.exports = router; // Export the router for use in other files
