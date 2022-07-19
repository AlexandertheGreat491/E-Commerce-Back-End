// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

//create associations

// Product belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
// Category have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// Product belongsToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {

});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
