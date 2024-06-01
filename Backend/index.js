const express = require('express')
const app = express()
const Book = require('./models/book-models')
const bookRoutes = require('./router/book-router')
const mongoose = require('mongoose')
const cors = require('cors')


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors())

// routes
app.use("/api/books", bookRoutes)



app.get('/', (req,res) => {
    res.send("Hello from node api hello")
});




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

