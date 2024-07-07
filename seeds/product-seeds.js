// Purpose: To seed the product table with data

const { Product } = require('../models'); // Import the Product model from models/index.js 

const productData = [ // Define an array of product data objects to seed the Product table
  { // Define the first product data object 
    product_name: 'Plain T-Shirt', // Define the product_name column value 
    price: 14.99, // Define the price column value 
    stock: 14, // Define the stock column value 
    category_id: 1, // Define the category_id column value 
  },
  { // Define the second product data object 
    product_name: 'Running Sneakers', // Define the product_name column value 
    price: 90.0, // Define the price column value 
    stock: 25, // Define the stock column value 
    category_id: 5, // Define the category_id column value 
  },
  {
    product_name: 'Branded Baseball Hat', // Define the product_name column value 
    price: 22.99, // Define the price column value 
    stock: 12, // Define the stock column value 
    category_id: 4, // Define the category_id column value 
  },
  { // Define the fourth product data object 
    product_name: 'Top 40 Music Compilation Vinyl Record', // Define the product_name column value 
    price: 12.99, // Define the price column value 
    stock: 50, // Define the stock column value 
    category_id: 3, // Define the category_id column value 
  },
  { // Define the fifth product data object 
    product_name: 'Cargo Shorts', // Define the product_name column value 
    price: 29.99, // Define the price column value 
    stock: 22, // Define the stock column value 
    category_id: 2, // Define the category_id column value 
  },
]; // End of the array of product data objects to seed the Product table 

const seedProducts = () => Product.bulkCreate(productData); // Seed the Product table with the product data 

module.exports = seedProducts; // Export the seedProducts function for use in other files 
