import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

// @desc Fetch single product
// @route /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  let id = req.params.id
  const product = await Product.findById(id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not Found')
  }
})

export { getProductById, getProducts }
