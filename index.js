const express = require('express')
const app = express()
const Book = require('./models/book-models')
const mongoose = require('mongoose')

app.use(express.json());


//testing api
app.get('/', (req,res) => {
    res.send("Hello from node api hello")
})


// connecting mongodb 
mongoose.connect('mongodb+srv://azeekkalathil99:FbKqaMbNWOWkx4Ir@book-store.axheo6d.mongodb.net/?retryWrites=true&w=majority&appName=Book-Store').then(() => {
    try {
        console.log('connected')
        app.listen(3000, () => {
            console.log("server is running on port 3000")
        })
    } catch (error) {
        console.log("connection failed");
    }
})

// posting books into api

app.post('/api/books', async (req,res) => {
    try {
        const books = await Book.create(req.body)
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

//getting books from api
app.get('/api/books', async (req,res) => {
    try {
        const books = await Book.find({})
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

//getting books by id 

app.get('/api/books/:id', async (req,res) => {
    try {
        const {id} = req.params;

        const books = await Book.findById(id);
        res.status(200).json(books)
        
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

// update a book 
app.put('/api/books/:id' , async(req,res) => {
    try {
        const {id} = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body)
        res.status(200).json(updatedBook)
    } catch (error) {
        res.status(500).json({message : error.message}) 
    }
})


// delete a book
app.delete('/api/books/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const deleteBook = await Book.findByIdAndDelete(id,req.body)
        res.status(200).json(deleteBook)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

