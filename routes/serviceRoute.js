const express = require('express')
const serviceCtl = require('../controllers/serviceController')

const router = express.Router()
router.get('/services', serviceCtl.getAllServices)
router.get('/service/:id', serviceCtl.getServiceById)

module.exports = router