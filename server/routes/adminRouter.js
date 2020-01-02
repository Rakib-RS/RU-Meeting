const adminRouterCtrl = require('../controllers/adminController');
const express = require('express');
const router = express.Router();
router.post('/signup',adminRouterCtrl.createUser);

module.exports = router;