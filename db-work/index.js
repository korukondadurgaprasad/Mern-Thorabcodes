
// Mongoose is an Object Data Modeling (ODM) library for MongoDB in Node.js. 
// It provides a structured way to interact with MongoDB databases by defining schemas and models for data.

const mongoose = require('mongoose')

// connection to mongo server

mongoose.connect('mongodb://localhost:27017/apidev_demo')
    .then(() => {
        console.log("Connection Succesfull")
    })
    .catch((err) => {
        console.log(err)
    })


// In Node.js, a schema defines the structure and properties of data. 
// It acts as a blueprint for how data should be organized and validated, 
// ensuring consistency and integrity within an application. 
//schema


const userSchema = mongoose.Schema({
    // name:String,
    // age:Number,

    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        min: 8,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 20,
        max: 100
    }
}, { timestamps: true })



// model  conection between the schema and collection
const userModel = mongoose.model('users', userSchema);
// model is a class that we can use to create new documents in the collection.
// we can use the model to create new documents, read existing documents, update existing documents, and
// delete existing documents.





// inserting data

// let user = {
//     name: "thor",
//     age: 28,
//     password:23456,
//     email: "prasad@gmail.com",
//     role: "admin"

// }



// userModel.create(user)
//     .then((data) => {
//         console.log(data)
//         console.log("Data Inserted")

//     })
//     .catch((err) => {
//         console.log(err)
//     })




// fetching data




// userModel.find({ name: "prasa" })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err)
//     })


userModel.find().sort({age:1})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})



// Delete

// userModel.deleteOne({ age: 24 })
//     .then((info) => {
//         console.log(info);
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// userModel.deleteMany({ age: 26 })
//     .then((info) => {
//         console.log(info);
//     })
//     .catch((err) => {
//         console.log(err)
//     })



// update
// userModel.updateOne( { name: "prasa" },{ age: 24 })
//     .then((info) => {
//         console.log(info);
//     })
//     .catch((err) => {
//         console.log(err)
//     })
