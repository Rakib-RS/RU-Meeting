const adminRouterCtrl = require('../controllers/adminController');
const express = require('express');
const router = express.Router();
router.post('/login',adminRouterCtrl.createUser);

module.exports = router;