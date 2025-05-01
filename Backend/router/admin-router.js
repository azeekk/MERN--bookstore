const express = require('express');
const router = express.Router();
const { createAdmin, loginAdmin } = require('../controller/admin.controller'); 

router.post('/', createAdmin);
router.post('/login',loginAdmin),

module.exports = router;
