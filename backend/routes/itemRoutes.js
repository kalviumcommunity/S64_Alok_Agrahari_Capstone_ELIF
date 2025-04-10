const express = require('express');
const { createItem, getAllItems } = require('../controllers/itemController');

const router = express.Router();

router.post('/create', createItem);

router.get('/', getAllItems);

module.exports = router;