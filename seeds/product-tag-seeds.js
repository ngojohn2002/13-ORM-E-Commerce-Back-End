// Purpose: To seed the product tag data into the database.
// This file creates associations between products and tags.

const { ProductTag } = require('../models'); // Import the ProductTag model from models/index.js 

const productTagData = [ // Define an array of product tag data objects to seed the ProductTag table 
  { // Define the first product tag data object 
    product_id: 1, // Define the product_id column value 
    tag_id: 6, // Define the tag_id column value 
  },
  { // Define the second product tag data object 
    product_id: 1, // Define the product_id column value 
    tag_id: 7, // Define the tag_id column value 
  },
  { // Define the third product tag data object 
    product_id: 1, // Define the product_id column value 
    tag_id: 8, // Define the tag_id column value 
  },
  { // Define the fourth product tag data object 
    product_id: 2, // Define the product_id column value 
    tag_id: 6, // Define the tag_id column value 
  },
  { // Define the fifth product tag data object
    product_id: 3, // Define the product_id column value 
    tag_id: 1, // Define the tag_id column value 
  },
  { // Define the sixth product tag data object 
    product_id: 3, // Define the product_id column value 
    tag_id: 3, // Define the tag_id column value 
  },
  { // Define the seventh product tag data object 
    product_id: 3, // Define the product_id column value 
    tag_id: 4, // Define the tag_id column value 
  },
  { // Define the eighth product tag data object 
    product_id: 3, // Define the product_id column value 
    tag_id: 5, // Define the tag_id column value 
  },
  { // Define the ninth product tag data object 
    product_id: 4, // Define the product_id column value 
    tag_id: 1, // Define the tag_id column value 
  },
  { // Define the tenth product tag data object 
    product_id: 4, // Define the product_id column value 
    tag_id: 2, // Define the tag_id column value 
  },
  { // Define the eleventh product tag data object 
    product_id: 4, // Define the product_id column value 
    tag_id: 8, // Define the tag_id column value 
  },
  { // Define the twelfth product tag data object 
    product_id: 5, // Define the product_id column value 
    tag_id: 3, // Define the tag_id column value 
  },
]; // End of the array of product tag data objects to seed the ProductTag table 

const seedProductTags = () => ProductTag.bulkCreate(productTagData); // Seed the ProductTag table with the product tag data 

module.exports = seedProductTags; // Export the seedProductTags function for use in other files
