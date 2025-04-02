const path = require('path');
const fileSystem = require('fs');
const express = require('express');
const { STATUS_CODE } = require('../constants/statusCode');
const renderNewProductPage = require('../views/renderNewProductPage');

const router = express.Router();

// GET /product/add - Show add product form
router.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'add-product.html'));
});

// POST /product/add - Handle form submission
router.post('/add', (req, res) => {
  const { name, description } = req.body;
  const productData = `name: ${name}, description: ${description}`;

  
  fileSystem.writeFile('product.txt', productData, (err) => {
    if (err) {
      console.error(err);
    }
    res.status(STATUS_CODE.FOUND).redirect('/product/new');
  });
});

// GET /product/new - Show the newest product
router.get('/new', (req, res) => {
  fileSystem.readFile('./product.txt', 'utf-8', (err, data) => {
    if (err) {
      res.send(renderNewProductPage());
    } else {
      res.send(renderNewProductPage(data));
    }
  });
});

module.exports = router;