// Purpose: This file is the index.js file for the models folder. It exports the models for the application.  

// Import the models
const Product = require('./Product'); // Import the Product model
const Category = require('./Category'); // Import the Category model
const Tag = require('./Tag'); // Import the Tag model
const ProductTag = require('./ProductTag'); // Import the ProductTag model

// Products belongsTo Category
Product.belongsTo(Category, { // Define the association between Product and Category models
  foreignKey: 'category_id', // Define the foreign key in the Product model
});

// Categories have many Products
Category.hasMany(Product, { // Define the association between Category and Product models
  foreignKey: 'category_id', // Define the foreign key in the Product model
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { // Define the association between Product and Tag models
  through: ProductTag, // Define the through table
  foreignKey: 'product_id', // Define the foreign key in the Product model
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { // Define the association between Tag and Product models
  through: ProductTag, // Define the through table
  foreignKey: 'tag_id', // Define the foreign key in the Tag model
});

module.exports = { // Export the models for use in other files
  Product, // Export the Product model
  Category, // Export the Category model
  Tag, // Export the Tag model
  ProductTag, // Export the ProductTag model
};
