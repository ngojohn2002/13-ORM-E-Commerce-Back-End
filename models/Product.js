/* Import the sequelize library and connection to the database, and define the Product model with the following configuration:
- Define the columns of the Product table: id, product_name, price, stock, and category_id.
- Set the data types and constraints for each column.
- Define the relationships between the models using Sequelize associations.
- Configure the model options: timestamps, freezeTableName, underscored, and modelName.
- Export the Product model for use in other files.
*/

// Import the sequelize library and connection to the database
const { Model, DataTypes } = require('sequelize'); // Import the Model and DataTypes classes from Sequelize
const sequelize = require('../config/connection'); // Import the connection to the database from connection.js

class Product extends Model {} // Extending Model class to create a new Sequelize model for the Product table 

Product.init( // Initialize the Product model with the following configuration
  { // Define the columns of the Product table 
    id: { // Define the id column 
      type: DataTypes.INTEGER, // Specify data type as INTEGER
      allowNull: false, // Cannot be null 
      primaryKey: true, // Primary key
      autoIncrement: true, // Automatically incrementing value
    }, 
    product_name: { // Define the product_name column
      type: DataTypes.STRING, // Specify data type as STRING
      allowNull: false, // Cannot be null
    }, 
    price: { // Define the price column
      type: DataTypes.DECIMAL, // Specify data type as DECIMAL 
      allowNull: false, // Cannot be null 
      validate: { // Validate the price value
        isDecimal: true, // Validate for decimal value 
      }, 
    }, 
    stock: { // Define the stock column
      type: DataTypes.INTEGER, // Specify data type as INTEGER
      allowNull: false, // Cannot be null 
      defaultValue: 10, // Default value is 10 
      validate: { // Validate the stock value 
        isNumeric: true, // Validate for numeric value 
      }, 
    }, 
    category_id: { // Define the category_id column
      type: DataTypes.INTEGER, // Specify data type as INTEGER
      references: { // References another model 
        model: "category", // References the Category model 
        key: "id", // Specific key in the Category model that this field refers to
      }, 
    }, 
  }, 
  { // Configure the model options
    sequelize, // Pass in the imported sequelize connection 
    timestamps: false, // Disable timestamps 
    freezeTableName: true, // Prevent pluralization of the table name 
    underscored: true, // Use underscores instead of camel-casing 
    modelName: "product", // Set the model name to 'product'
  }
);

// Export the Product model for use in other files
module.exports = Product; 
