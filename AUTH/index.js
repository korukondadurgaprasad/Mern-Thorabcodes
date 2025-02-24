const mongoose = require("mongoose");
const express = require("express");
const { MongoServerClosedError, Timestamp } = require("mongodb")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


//  Database connection

mongoose.connect("mongodb://localhost:27017/auth-demo")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err.message));

// Schema for user


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

}, { timestamp: true })

// Model for user
const userModel = mongoose.model("users", userSchema);



// time for expess
// enpoints

const app = express()

app.use(express.json())

// app.post("/register", (req, res) => {
//     let user = req.body


//     bcrypt.genSalt(10, (err, salt) => {
//         if (!err) {
//             bcrypt.hash(user.password, salt, (err, hpass) => {
//                 if (!err) {
//                     user.password = hpass

//                 }
//             })
//         }
//     })
//     userModel.create(user)
//         .then((doc) => {
//             res.send({ message: "registration successfull" })
//         })
//         .catch((err) => {
//             res.send({ message: err.message })
//         })
//     // res.send("Post Working")

// })





app.post("/register", (req, res) => {
    let user = req.body


    bcrypt.genSalt(10, (err, salt) => {
        if (!err) {
            bcrypt.hash(user.password, salt, (err, hpass) => {
                if (!err) {
                    user.password = hpass
                    userModel.create(user)
                        .then((doc) => {
                            res.send({ message: "registration successfull" })
                        })
                        .catch((err) => {
                            res.send({ message: err.message })
                        })

                }


            })
        }
    })

})





// end point for login


app.post("/login", (req, res) => {


    let userCred = req.body;
    userModel.findOne({ email: userCred.email })
        .then((user) => {
            if (user !== null) {
                bcrypt.compare(userCred.password, user.password, (err, result) => {
                    if (result === true) {

                        //generate a token and send it back
                        jwt.sign({ email: userCred.email }, "prasad", (err, token) => {
                            if (!err) {
                                res.send({ token: token })
                            }

                        })

                    }
                    else {
                        res.send({ message: "Incorrect Password" })
                    }
                })
            }
            else {
                res.send({ message: "worng email" })
            }
        })

})





app.get("/getdata", verifyToken, (req, res) => {
    res.send({ message: "I am a bad developer with a good heart" });

})




function verifyToken(req, res, next) {
    // console.log(req.headers);
    let token=req.headers.authorization.split(" ")[1];
    
    res.send("Coming from middleware")

}









app.listen(8000, () => {
    console.log("server is running on port 8000");
})

