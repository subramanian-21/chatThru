const router = require('express').Router()

const mainController = require('../controller/mainController')

router.post('/register',mainController.register)

module.exports = router