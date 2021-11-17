// initialization
const userController = require('../controllers/userController')
const express = require('express')
const userRoutes = express.Router()

// Signup
userRoutes.post('/create',userController.createUser)

module.exports = userRoutes