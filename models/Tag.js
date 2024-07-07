/* Initiate the Tag model with the following configuration:
- Define the columns of the Tag table: id and tag_name
- Set the data types and constraints for each column
- Configure the model options: timestamps, freezeTableName, underscored, and modelName
- Export the Tag model for use in other files
*/


const { Model, DataTypes } = require('sequelize'); // Import the Model and DataTypes classes from Sequelize

const sequelize = require('../config/connection.js'); // Import the connection to the database from connection.js

class Tag extends Model {} // Extending Model class to create a new Sequelize model for the Tag table 

Tag.init( // Initialize the Tag model with the following configuration 
  { // Define the columns of the Tag table 
    id: { // Define the id column
      type: DataTypes.INTEGER, // Specify data type as INTEGER
      allowNull: false, // Cannot be null
      primaryKey: true, // Primary key
      autoIncrement: true, // Automatically incrementing value
    }, 
    tag_name: { // Define the tag_name column
      type: DataTypes.STRING, // Specify data type as STRING
    }, 
  },
  { // Configure the model options
    sequelize, // Pass in the imported sequelize connection 
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Prevent pluralization of the table name
    underscored: true, // Use underscores instead of camel-casing
    modelName: 'tag', // Set the model name to 'tag' 
  }
);

// Export the Tag model for use in other files
module.exports = Tag;
