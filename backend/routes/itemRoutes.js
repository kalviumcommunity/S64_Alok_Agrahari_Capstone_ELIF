const express = require('express');
const { createItem, getAllItems, updateItem, deleteItem } = require('../controllers/itemController');

const router = express.Router();

router.post('/create', createItem);

router.get('/', getAllItems);

router.put('/:id', updateItem);

router.delete('/:id', deleteItem);

module.exports = router;