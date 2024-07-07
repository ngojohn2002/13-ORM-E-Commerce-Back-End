// Handles all category-specific routing, allowing CRUD operations on the category data.

const router = require('express').Router(); // Import the Router class from express
const { Category, Product } = require('../../models'); // Import the Category and Product models

// The `/api/categories` endpoint

router.get('/', (req, res) => { // Define the route to get all categories
  // find all categories
  // be sure to include its associated Products
  Category.findAll({ // Find all categories
    include: [Product], // Include the associated Products
  }) // Return the results as JSON
    .then((categories) => res.json(categories)) // Return the results as JSON
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

router.get('/:id', (req, res) => { // Define the route to get one category by its `id` value
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id, { // Find a category by its `id` value
    include: [Product], // Include the associated Products
  }) // Return the results as JSON
    .then((category) => res.json(category)) // Return the results as JSON
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

router.post('/', (req, res) => { // Define the route to create a new category
  // create a new category
  Category.create(req.body) // Create a new category with the data from the request body
    .then((category) => res.status(200).json(category)) // Return the results as JSON
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

router.put('/:id', (req, res) => { // Define the route to update a category by its `id` value
  // update a category by its `id` value
  Category.update(req.body, { // Update a category with the data from the request body
    where: { // Find the category by its `id` value
      id: req.params.id, // Get the `id` value from the request parameters
    },
  }) // Return the results as JSON
    .then((category) => res.status(200).json(category)) // Return the results as JSON
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

router.delete('/:id', (req, res) => { // Define the route to delete a category by its `id` value
  // delete a category by its `id` value
  Category.destroy({ // Delete a category by its `id` value
    where: { // Find the category by its `id` value
      id: req.params.id, // Get the `id` value from the request parameters
    },
  }) // Return the results as JSON
    .then((category) => res.status(200).json(category)) // Return the results as JSON
    .catch((err) => res.status(500).json(err)); // Catch and handle any errors
});

module.exports = router; // Export the router for use in other files
