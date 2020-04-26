const express = require('express')
const router = express.Router()

const formControllers = require('../controllers/form')

router.post('/', formControllers.createForm);


router.get('/', formControllers.getAllForm);

module.exports = router