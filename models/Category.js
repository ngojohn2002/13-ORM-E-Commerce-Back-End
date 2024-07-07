/** 
 * This file imports the sequelize library and connection to the database from connection.js 
 **/

const { Model, DataTypes } = require('sequelize'); // Import the Model and DataTypes classes from Sequelize 

const sequelize = require('../config/connection.js'); // Import the connection to the database from connection.js 

class Category extends Model {} // Extending Model class to create a new Sequelize model for the Category table 

Category.init( // Initialize the Category model with the following configuration 
  {
    id: { // Define the id column
      type: DataTypes.INTEGER, // Specify data type as INTEGER 
      allowNull: false, // Cannot be null 
      primaryKey: true, // Primary key 
      autoIncrement: true, // Automatically incrementing value 
    }, 
    category_name: { // Define the category_name column 
      type: DataTypes.STRING, // Specify data type as STRING
      allowNull: false, // Cannot be null 
    } 
  }, 
  { // Configure the model options
    sequelize, // Pass in the imported sequelize connection
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Prevent pluralization of the table name
    underscored: true, // Use underscores instead of camel-casing
    modelName: 'category', // Set the model name to 'category'
  } 
); 

// Export the Category model for use in other files
module.exports = Category;
