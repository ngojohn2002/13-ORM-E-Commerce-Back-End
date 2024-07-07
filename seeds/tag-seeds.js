// Purpose: To seed the tag table with data.

const { Tag } = require('../models'); // Import the Tag model from models/index.js 

const tagData = [ // Define an array of tag data objects to seed the Tag table 
  { // Define the first tag data object 
    tag_name: 'rock music', // Define the tag_name column value 
  }, 
  { // Define the second tag data object 
    tag_name: 'pop music', // Define the tag_name column value 
  },
  { // Define the third tag data object 
    tag_name: 'blue', // Define the tag_name column value 
  },
  { // Define the fourth tag data object 
    tag_name: 'red', // Define the tag_name column value
  },
  { // Define the fifth tag data object 
    tag_name: 'green', // Define the tag_name column value 
  },
  { // Define the sixth tag data object 
    tag_name: 'white', // Define the tag_name column value 
  },
  { // Define the seventh tag data object 
    tag_name: 'gold', // Define the tag_name column value 
  },
  { // Define the eighth tag data object 
    tag_name: 'pop culture', // Define the tag_name column value 
  },
]; // End of the array of tag data objects to seed the Tag table

const seedTags = () => Tag.bulkCreate(tagData); // Seed the Tag table with the tag data 

module.exports = seedTags; // Export the seedTags function for use in other files 
