const express = require('express')
const router = express.Router()
const user = require('../controllers/userController')

router.get('/', user.show)

module.exports = router