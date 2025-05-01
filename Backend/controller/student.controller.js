const Student = require('../models/student-models')

const createStudent = async (req, res) => {

        try {
            const books = await Student.create(req.body)
            res.status(200).json(books)

        } catch (error) {
            res.status(500).json({message : error.message})
        }
}

module.exports = {createStudent};