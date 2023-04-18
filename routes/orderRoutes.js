import express from 'express'
const router = express.Router()

import { protect } from '../models/authMiddleware.js'
import { addOrderItems,getOrderById,updateOrderToPaid } from '../controllers/orderController.js'

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)
router.route('/:id').put(protect, updateOrderToPaid)

export default router
