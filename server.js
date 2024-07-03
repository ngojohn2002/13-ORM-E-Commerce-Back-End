// Import the express library to create and manage the server
const express = require("express");

// Import the routes from the routes directory to handle incoming API requests
const routes = require("./routes");

// Import the Sequelize connection from the configuration file
const sequelize = require("./config/connection");

// Create an instance of the express application
const app = express();

// Set the port for the server to listen on; use the PORT environment variable or default to 3001
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON and urlencoded data sent in requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup the API routes that the application will use
app.use(routes);

// Sync Sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  // Start listening on the specified port and log a message once the server is up and running
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});