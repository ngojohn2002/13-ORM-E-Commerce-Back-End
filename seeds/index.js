// This file will be used to call all of the individual seed files and then exit the process once all of the seeds have been run. 

const seedCategories = require('./category-seeds'); // Import the seedCategories function from category-seeds.js 
const seedProducts = require('./product-seeds'); // Import the seedProducts function from product-seeds.js 
const seedTags = require('./tag-seeds'); // Import the seedTags function from tag-seeds.js 
const seedProductTags = require('./product-tag-seeds'); // Import the seedProductTags function from product-tag-seeds.js 

const sequelize = require('../config/connection'); // Import the connection to the database from connection.js 

const seedAll = async () => { // Define an asynchronous function to seed the database 
  await sequelize.sync({ force: true }); // Sync the database and force the creation of the tables 
  console.log('\n----- DATABASE SYNCED -----\n'); // Log that the database has been synced 
  await seedCategories(); // Call the seedCategories function 
  console.log('\n----- CATEGORIES SEEDED -----\n'); // Log that the categories have been seeded 

  await seedProducts(); // Call the seedProducts function 
  console.log('\n----- PRODUCTS SEEDED -----\n'); // Log that the products have been seeded 

  await seedTags(); // Call the seedTags function 
  console.log('\n----- TAGS SEEDED -----\n'); // Log that the tags have been seeded 

  await seedProductTags(); // Call the seedProductTags function 
  console.log('\n----- PRODUCT TAGS SEEDED -----\n'); // Log that the product tags have been seeded 

  process.exit(0); // Exit the process once all of the seeds have been run 
};

seedAll(); // Call the seedAll function to seed the database 
