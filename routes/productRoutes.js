const express = require('express');
const router = express.Router();



const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  updateProductPartially,
  deleteProduct
} = require('../controllers/productControllers');

const validateProduct =
    require("../middleware/validateProduct");



router.get('/', getProducts);

router.post("/", validateProduct, createProduct);

router.get('/:id', getProductById);

router.put('/:id', updateProduct)

router.patch('/:id', updateProductPartially);

router.delete('/:id', deleteProduct);

module.exports = router;