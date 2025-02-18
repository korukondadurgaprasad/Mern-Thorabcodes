const express = require("express");
const app = express();

// app.use(middleman)

// app.get("/products", (req, res) => {
//     console.log("Get request is coming")
//     res.send({ message: "Get request Sucess" })
// })



// app.get("/users/:id", (req, res) => {
//     console.log(req.params.id)
//     res.send({ message: "User responce" })
// })

// data base connection


app.use(express.json());

app.get("/products", (req, res) => {
    res.send({ message: "All Products" })
})
app.get("/products/:id", (req, res) => {
    console.log(req.params.id)
    res.send({ message: "Single product" })
})


app.post("/products", (req, res) => {

    // let product = " "
    // req.on('data', (chunk) => {
    //     product += chunk
    // })
    // req.on("end", () => {
    //     console.log(JSON.parse(product))
    // })
    console.log(req.body)
    res.send({ message: "Post Working" })
})

app.delete("/products/:id",(req,res)=>{
    console.log(req.params.id)
    res.end({message:"delete succesful"})
})


app.put("/products/:id",(req,res)=>{
    console.log(req.params.id);
    console.log(req.body);
    res.send({message:"update succesful"})
})





















// app.get("/testing/:id",(req,res)=>{
//     res.send({message:"Testing"})

// })



// function middleman(req,res,next){
//     if(req.params.id<10)
//     {
//         res.send({message:"You are Blocked"})
//     }
//     else{
//         next()
//     }

// }




app.listen(8000, () => {
    console.log("server is running on port 8000");
})

