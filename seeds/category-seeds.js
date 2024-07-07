// Purpose: To seed the category table with data.

const { Category } = require('../models'); // Import the Category model from models/index.js 

const categoryData = [ // Define an array of category data objects to seed the Category table 
  { // Define the first category data object 
    category_name: 'Shirts', // Define the category_name column value 
  }, 
  { // Define the second category data object 
    category_name: 'Shorts', // Define the category_name column value 
  },
  { // Define the third category data object
    category_name: 'Music', // Define the category_name column value 
  },
  { // Define the fourth category data object 
    category_name: 'Hats', // Define the category_name column value
  },
  { // Define the fifth category data object 
    category_name: 'Shoes', // Define the category_name column value 
  },
];

const seedCategories = () => Category.bulkCreate(categoryData); // Seed the Category table with the category data 

module.exports = seedCategories; // Export the seedCategories function for use in other files
