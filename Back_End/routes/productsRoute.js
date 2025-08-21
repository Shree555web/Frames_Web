const express = require('express');
const router = express.Router();
const multer = require('multer');
const productController = require('../controllers/productsController');

// Configure multer
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// POST route to upload product with image
router.post('/add', upload.single('Product_Image'), productController.addProduct);
router.get('/category/:categoryId', productController.getProduct);
router.get('/:id', productController.getProductById);

module.exports = router;
