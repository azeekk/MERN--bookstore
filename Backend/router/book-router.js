const express = require('express');
const Book = require('../models/book-models')
const router = express.Router();
const {getBooks, getBook, updateBook, deleteBook, createBook} = require('../controller/book.controller')

router.get('/', getBooks)
router.get('/:id',getBook)
router.post('/',createBook)
router.put('/:id', updateBook)
router.delete('/:id',deleteBook)

module.exports = router;