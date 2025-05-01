    const Book = require('../models/book-models')

    const getBooks = async (req,res) => {
        try {
            const books = await Book.find({})
            res.status(200).json(books)
        } catch (error) {
            res.status(500).json({message : error.message})
        }
    }

    const createBook = async (req,res) => {
        try {
            const books = await Book.create(req.body)
            res.status(200).json(books)
        } catch (error) {
            res.status(500).json({message : error.message})
        }
    }



    const getBook = async(req,res) => {
        try {
            const {id} = req.params;

            const books = await Book.findById(id);
            res.status(200).json(books)
            
        } catch (error) {
            res.status(500).json({message : error.message})
        }
    }

    const updateBook = async(req,res) => {
        try {
            const {id} = req.params;
            const updatedBook = await Book.findByIdAndUpdate(id, req.body)
            res.status(200).json(updatedBook)
        } catch (error) {
            res.status(500).json({message : error.message}) 
        }
    }

    const deleteBook = async(req,res) => {
        try {
            const {id} = req.params;
            const deleteBook = await Book.findByIdAndDelete(id,req.body)
            res.status(200).json(deleteBook)
        } catch (error) {
            res.status(500).json({message : error.message})
        }
    }

    module.exports = {
        getBooks,
        getBook,
        updateBook,
        deleteBook,
        createBook
    }