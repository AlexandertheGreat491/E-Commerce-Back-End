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
  .then(dbCatData => {
    if(!dbCatData) {
      res.status(404).json({message: 'No categories were found!'})
      return;
    }
    res.json(dbCatData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

// finds one category by its `id` value
// includes its associated Products
router.get("/:id", (req, res) => {
  Category.findAll({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  .then(dbCatData => {
    if(!dbCatData) {
      res.status(404).json({message: 'No categories were found!'});
      return;
    }
    res.json(dbCatData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
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
