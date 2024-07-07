// ? This file defines the ProductTag model, which is a join table that connects the Product and Tag models
// ? The ProductTag model has two foreign keys: product_id and tag_id, which reference the id columns in the Product and Tag models
// ? The ProductTag model is used to establish a many-to-many relationship between the Product and Tag models
// ? The ProductTag model is initialized with the following configuration: id, product_id, and tag_id columns
// ? The model options include timestamps, freezeTableName, underscored, and modelName
// ? The ProductTag model is exported for use in other files

const { Model, DataTypes } = require('sequelize'); // Import the Model and DataTypes classes from Sequelize 

const sequelize = require('../config/connection'); // Import the connection to the database from connection.js

class ProductTag extends Model {} // Extending Model class to create a new Sequelize model for the ProductTag table

ProductTag.init(
  // Initialize the ProductTag model with the following configuration
  {
    // Define the columns of the ProductTag table
    id: { // Define the id column 
      type: DataTypes.INTEGER, // Specify data type as INTEGER
      allowNull: false, // Cannot be null
      primaryKey: true, // Primary key
      autoIncrement: true, // Automatically incrementing value
    },
    product_id: { // Define the product_id column
      type: DataTypes.INTEGER, // Specify data type as INTEGER
      references: { // References another model 
        model: "product", // References Product model 
        key: "id", // Specific key in the Product model that this field refers to
      },
    },
    tag_id: { // Define the tag_id column 
      type: DataTypes.INTEGER, // Specify data type as INTEGER
      references: { // References another model
        model: "tag", // References Tag model
        key: "id", // Specific key in the Tag model that this field refers to
      },
    },
  },
  { // Configure the model options
    sequelize, // Pass in the imported sequelize connection
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Prevent pluralization of the table name
    underscored: true, // Use underscores instead of camel-casing 
    modelName: "product_tag", // Set the model name to 'product_tag'
  }
);

// Export the ProductTag model for use in other files
module.exports = ProductTag;
