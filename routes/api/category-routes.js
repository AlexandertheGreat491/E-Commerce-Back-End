const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
// find all categories
// includes associated Products
router.get("/", (req, res) => {
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
});

// finds one category by its `id` value
// includes its associated Products
router.get("/:id", (req, res) => {
  
});

// creates a new category
router.post("/", (req, res) => {
  
});

// updates a category by its `id` value
router.put("/:id", (req, res) => {
  
});

// deletes a category by its `id` value
router.delete("/:id", (req, res) => {
  
});

module.exports = router;
