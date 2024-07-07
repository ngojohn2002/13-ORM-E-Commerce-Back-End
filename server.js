// Purpose: Main entry point for the application. This file creates the server, sets up the routes, and starts the server. 

// Import necessary Node.js packages
const express = require("express"); // Import the express library to create and manage the server application
const sequelize = require("./config/connection"); // Import the Sequelize connection from the configuration file

// Initialize an Express application
const app = express(); // Create an instance of the express application 
const PORT = process.env.PORT || 3001; // Set the port for the server to listen on; use the PORT environment variable or default to 3001
 
// Middleware to parse JSON and urlencoded data sent in requests to the server 
app.use(express.json()); // Parse JSON data sent in requests to the server 
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data sent in requests to the server 

// Import the routes from the routes directory to handle incoming API requests 
const routes = require("./routes"); // Import the routes from the routes directory 

 // Setup the API routes that the application will use
app.use(routes); // Use the routes imported from the routes directory to handle incoming requests 

// Sync Sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => { // Sync Sequelize models to the database; set force to false to prevent data loss 
  // Start listening on the specified port and log a message once the server is up and running
  app.listen(PORT, () => { // Start the server and listen on the specified port 
    console.log(`App listening on port ${PORT}!`); // Log a message to the console once the server is up and running 
  });
});