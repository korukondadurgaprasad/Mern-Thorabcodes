const express = require("express");
const app = express();
const mongoose = require("mongoose")


// data base connection
mongoose.connect("mongodb://localhost:27017/mongotuts")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB", err));



    

//schema for products

let productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name ia mandatory"]
    },
    price: {
        type: Number,
        required: [true, "price is mandatory"],
        min: 1
    },
    quantity: {
        type: Number,
        required: [true, "quantity is mandatory"],
        min: 1
    },
    category: {
        type: String,
        required: ["Clothing", "Electronics"]

    }

}, { timestamps: true })




//model creation

const productModel = mongoose.model("products", productSchema);

// middle to read request data and in post and put and convert to js object
app.use(express.json());


// endpoint to fetch all products

app.get("/products", (req, res) => {
    productModel.find()
        .then((products) => {
            res.send(products);
        })
        .catch((err) => {
            res.send({ message: "err" })
        })
})













// endpoint to fetch single data
app.get("/products/:id", (req, res) => {
    productModel.findOne({ _id: req.params.id })
        .then((product) => {
            res.send(product);
        })
        .catch((err) => {
            res.send({ message: "err" })
        })
})











// endpoint to update
app.post("/products", (req, res) => {
    // console.log(req.body)
    productModel.create(req.body)
        .then((document) => {
            res.send({ data: document, message: "Product created" })
        })
        .catch((err) => {
            res.send({ message: "err" })
        })
})












// endpoint to delete
app.delete("/products/:id", (req, res) => {
    productModel.deleteOne({ _id: req.params.id })
        .then((info) => {
            res.send({ message: "Product Deleted" })
        })
        .catch((err) => {
            res.send({ message: "err" })
        })


})






// endpoint to create product
app.put("/products/:id", (req, res) => {
    let product = req.body;
    productModel.updateOne({ _id: req.params.id }, product)
        .then((info) => {
            res.send({ message: "Product Updated" })
        })
        .catch((err) => {
            res.send({ message: "err" })
        })
})








app.listen(8000, () => {
    console.log("server is running on port 8000");
})

