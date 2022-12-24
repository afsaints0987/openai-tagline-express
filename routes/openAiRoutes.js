const express = require('express')
const router = express.Router()
const {generateTagLine} = require('../controllers/openAiController')

router.post('/generatetagline', generateTagLine)

module.exports = router