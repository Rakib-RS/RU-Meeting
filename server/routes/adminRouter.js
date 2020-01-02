const adminRouterCtrl = require('../controllers/adminController');
const adminLogin = require('../controllers/adminLogin')
const express = require('express');
const router = express.Router();
router.post('/login',adminLogin.login);
router.post('/signup',adminRouterCtrl.createUser);

module.exports = router;