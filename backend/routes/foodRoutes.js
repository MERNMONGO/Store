const express = require('express')

const router = express.Router()

const foodControl = require('../controllers/foodController')

const { authorize, confirmUserAccess } = require('../middleware/authMiddleware')


// index
router.get('/', authorize,foodControl.index)

// delete
router.delete('/:id', authorize, confirmUserAccess, foodControl.delete)

router.delete('/',foodControl.deleteAll)
// update
router.put('/:id', authorize, confirmUserAccess, foodControl.edit)

// create
router.post('/', authorize, foodControl.create)

// show
router.get('/:id', foodControl.show)

module.exports = router