const express = require('express');
const { createItem, getAllItems, updateItem } = require('../controllers/itemController');

const router = express.Router();

router.post('/create', createItem);

router.get('/', getAllItems);

router.put('/:id', updateItem);

module.exports = router;