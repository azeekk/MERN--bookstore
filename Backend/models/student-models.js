const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema(
    {
        name :{
            type:String,
            required:true
        },
        class :{
            type:String,
            required:true
        },
        contact_number :{
            type:Number,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        dob:{
            type:Date,
            required:true
        }
     

    },

    {
        timestamps:true
    }
)