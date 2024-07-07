/**
* This file establishes a connection to the PostgreSQL database using Sequelize. It reads environment variables for 
* database configuration to secure sensitive information like username and password.
**/

// Load environment variables from a .env file located at the root of the project.
// This ensures that sensitive information like database credentials are not hardcoded in the source code.
require('dotenv').config();  

// Import Sequelize constructor from the sequelize package.
const Sequelize = require('sequelize'); 

// Create a new Sequelize instance and pass in the database name, username, and password.
// If the application is deployed, use the DATABASE_URL environment variable to connect to the database.
// Otherwise, use the local database configuration.
const sequelize = process.env.DB_URL 
  ? new Sequelize(process.env.DB_URL) 
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { // The database name, username, and password are read from environment variables 
      host: 'localhost', // The host is 'localhost' when the application is running locally 
      dialect: 'postgres', // The database dialect is 'postgres' since we are using a PostgreSQL database 
      dialectOptions: { // The dialectOptions object is used to configure the PostgreSQL connection settings 
        decimalNumbers: true, // The decimalNumbers option is set to true to prevent truncation of decimal values 
      },
    });

// Export the sequelize instance. This instance will be used throughout the application to interact with the database.
module.exports = sequelize; 
