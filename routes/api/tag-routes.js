const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// finds all tags
//  includes its associated Product data
router.get('/', (req, res) => {
  
});

// finds a single tag by its `id`
//  includes its associated Product data
router.get('/:id', (req, res) => {
  
});

// creates a new tag
router.post('/', (req, res) => {
  
});

// updates a tag's name by its `id` value
router.put('/:id', (req, res) => {
  
});

// deletes a tag by its `id` value
router.delete('/:id', (req, res) => {
  
});

module.exports = router;
