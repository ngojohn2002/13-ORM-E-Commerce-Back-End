/* This file is the entry point for the routes. It will import the API routes and set up the router. */

const router = require('express').Router(); // Import the Router class from express 
const apiRoutes = require('./api'); // Import the API routes from the api folder

router.use('/api', apiRoutes); // Use the API routes

router.use((req, res) => { // Define a default route that sends a message for incorrect routes
  res.send("<h1>Wrong Route!</h1>") // Send a message for incorrect routes
});

module.exports = router; // Export the router for use in other files