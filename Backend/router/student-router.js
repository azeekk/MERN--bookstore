const express = require('express');
const router = express.Router();
const {createStudent} = require('../controller/student.controller')

router.post('/', createStudent)

module.exports = router;