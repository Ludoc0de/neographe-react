const express = require('express')
const router = express.Router()
const controllersUser = require('../controllers/user')

router.post('/', controllersUser.signup);
router.post('/', controllersUser.login);

module.exports = router