const { Router } = require('express');
const express = require('express');
const router = express.Router();
const controller = require('../controllers/info.control');

router.get('/', controller.getInfo);

module.exports = router;