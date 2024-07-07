// Purpose: API routes for the Tag model.
// Handles routes specific to tag management in the system.

const router = require('express').Router(); // Import the Router class from express
const { Tag, Product, ProductTag } = require('../../models'); // Import the Tag, Product, and ProductTag models

// The `/api/tags` endpoint

router.get('/', (req, res) => { // Define the route to get all tags
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({ // Find all tags
    include: [Product], // Include the associated Product data
  }) // Return the results as JSON
    .then((tags) => res.json(tags)) // Return the results as JSON
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

router.get('/:id', (req, res) => { // Define the route to get one tag by its `id` value
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, { // Find a tag by its `id`
    include: [Product], // Include the associated Product data
  }) // Return the results as JSON
    .then((tag) => res.json(tag)) // Return the results as JSON
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

router.post('/', (req, res) => { // Define the route to create a new tag
  // create a new tag
  Tag.create(req.body) // Create a new tag with the data from the request body
    .then((tag) => res.status(200).json(tag)) // Return the results as JSON
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

router.put('/:id', (req, res) => { // Define the route to update a tag by its `id` value
  // update a tag's name by its `id` value
  Tag.update(req.body, { // Update a tag with the data from the request body
    where: { // Find the tag by its `id` value
      id: req.params.id, // Get the `id` value from the request parameters
    },
  }) // Return the results as JSON
    .then((tag) => res.status(200).json(tag)) // Return the results as JSON
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

router.delete('/:id', (req, res) => { // Define the route to delete a tag by its `id` value
  // delete on tag by its `id` value
  Tag.destroy({ // Delete a tag by its `id` value
    where: { // Find the tag by its `id` value
      id: req.params.id, // Get the `id` value from the request parameters
    },
  }) // Return the results as JSON
    .then((tag) => res.status(200).json(tag)) // Return the results as JSON
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

module.exports = router; // Export the router for use in other files
