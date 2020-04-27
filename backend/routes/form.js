const express = require('express')
const router = express.Router()

const controllersForm = require('../controllers/form')

router.post('/', controllersForm.createForm);

router.get('/', controllersForm.getAllForm);

module.exports = router