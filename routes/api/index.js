// Purpose: This file will import all of the API routes to prefix their endpoint names and package them up.

const router = require('express').Router(); // Import the Router class from express
const categoryRoutes = require('./category-routes'); // Import the category routes
const productRoutes = require('./product-routes'); // Import the product routes
const tagRoutes = require('./tag-routes'); // Import the tag routes

router.use('/categories', categoryRoutes); // Use the category routes
router.use('/products', productRoutes); // Use the product routes
router.use('/tags', tagRoutes); // Use the tag routes

module.exports = router; // Export the router for use in other files
