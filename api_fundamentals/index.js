
// User Should fetch all the data from the products [ GET/PRODUCTS]

// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//     // Checking the URL and HTTP method
//     if (req.url === '/products' && req.method === 'GET') {
//         fs.readFile("./products.json", 'utf-8', (err, data) => {
//             if (err == null) {
//                 res.end(data); // Sending the contents of products.json
//             } else {
//                 res.end("There was a problem reading the file.");
//             }
//         });
//     }
// }).listen(8000);






// Get/products?id=2

// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// http.createServer((req, res) => {

//     let parsedUrl = url.parse(req.url, true);  // ParseUrl= this help to divide the url properly and
//     console.log(parsedUrl)
//     if (parsedUrl.pathname === '/products' && req.method === 'GET') {
//         fs.readFile("./products.json", 'utf-8', (err, data) => {
//             if (err == null) {
//                 res.end(data); // Sending the contents of products.json
//             } else {
//                 res.end("There was a problem reading the file.");
//             }
//         });
//     }


// }).listen(8000)






// // Fetch a single product based on id

// const http = require('http');
// const fs = require('fs');
// const url = require('url');


// http.createServer((req, res) => {

//     let parsedUrl = url.parse(req.url,true);
//     console.log(parsedUrl.query.id)


//     let products=fs.readFileSync('./products.json',"utf-8")
//     if(parsedUrl.pathname=="/products" && req.method=="GET" && parsedUrl.query.id==undefined){
//         res.end(products)
//     }
//     else if(parsedUrl.pathname=="/products" && req.method=="GET" && parsedUrl.query.id!=undefined)
//     {
//         let productsArray=JSON.parse(products);

//         let a= productsArray.find((product)=>{
//             return product.id==parsedUrl.query.id;

//         })
//         if (a!=undefined){
//             res.end(JSON.stringify(a))
//         }
//         else{
//             res.end(JSON.stringify({"message":'product not found'}))
//         }
//     }


// }).listen(8000)







// POST/Products

// const http = require('http');
// const fs = require('fs');
// const url = require('url');


// http.createServer((req, res) => {

//     let parsedUrl = url.parse(req.url, true);
//     console.log(parsedUrl.query.id)

//     // readind the file asa string
//     let products = fs.readFileSync('./products.json', "utf-8")

//     //fetch all products

//     if (parsedUrl.pathname == "/products" && req.method == "GET" && parsedUrl.query.id == undefined) {
//         res.end(products)
//     }
//     //fetch all products based on id
//     else if (parsedUrl.pathname == "/products" && req.method == "GET" && parsedUrl.query.id != undefined) {
//         let productsArray = JSON.parse(products);

//         let a = productsArray.find((product) => {//i need to post the data to the array based on id so i have converted to string to
//             return product.id == parsedUrl.query.id;

//         })
//         if (a != undefined) {
//             res.end(JSON.stringify(a))
//         }
//         else {
//             res.end(JSON.stringify({ "message": 'product not found' }))
//         }
//     }
//     // create new product
//     else if (req.method == 'POST' && parsedUrl.pathname == "/products") {

//         let product = '';
//         //this event called for every chuk recweived
//         req.on("data", (chunk) => {
//             product += chunk

//         })
//         // this event is called at the end of the stream and converts bytes to readble string
//         req.on("end", () => {
//             let productsArray = JSON.parse(products); // array of all the products in products.json
//             // converting the product received in the request body to a json object
//             let newproduct = JSON.parse(product);

//             productsArray.push(newproduct);

//             fs.writeFile("./products.json", JSON.stringify(productsArray), (err) => {
//                 if (err == null) {
//                     res.end(JSON.stringify({ "message": 'product added' }))

//                 }

//             })
//         })
//         res.end("post working preperly")
//     }


// }).listen(8000)




// Delete/products
// 1. get the id of the product to be deleted
// 2. find the product in the array and delete it
// 3. write the updated array to the file
// 4. send the response back to the client
// 5. if the product is not found send a message to the client
// 6. if the product is found send a message to the client that the product has been
// deleted


// const http = require('http');
// const fs = require('fs');
// const url = require('url');


// http.createServer((req, res) => {

//     let parsedUrl = url.parse(req.url,true);
//     console.log(parsedUrl.query.id)

// // readind the file asa string
//     let products=fs.readFileSync('./products.json',"utf-8")

// //fetch all products

//     if(parsedUrl.pathname=="/products" && req.method=="GET" && parsedUrl.query.id==undefined){
//         res.end(products)
//     }
//     //fetch all products based on id
//     else if(parsedUrl.pathname=="/products" && req.method=="GET" && parsedUrl.query.id!=undefined)
//     {
//         let productsArray=JSON.parse(products);

//         let a= productsArray.find((product)=>{//i need to post the data to the array based on id so i have converted to string to
//             return product.id==parsedUrl.query.id;

//         })
//         if (a!=undefined){
//             res.end(JSON.stringify(a))
//         }
//         else{
//             res.end(JSON.stringify({"message":'product not found'}))
//         }
//     }
//      // create new product
//     else if (req.method=='POST' && parsedUrl.pathname=="/products")
//     {

//         let product='';
//         //this event called for every chuk recweived
//         req.on("data",(chunk)=>{
//             product+=chunk

//         })
//         // this event is called at the end of the stream and converts bytes to readble string
//         req.on("end",()=>{
//             let productsArray=JSON.parse(products);
//             let newproduct=JSON.parse(product);

//             productsArray.push(newproduct);

//             fs.writeFile("./products.json",JSON.stringify(productsArray),(err)=>{
//                 if(err==null){
//                     res.end(JSON.stringify({"message":'product added'}))

//                 }

//             })
//         })
//         res.end("post working preperly")
//     }
//     else if(req.method='DELETE' && parsedUrl.pathname=='/products'){
//         let id=parsedUrl.query.id

//         let productsArray =JSON.parse(products);
//         let index =productsArray.findIndex((product)=>{
//             return product.id==parsedUrl.query.id
//         })

//         productsArray.splice(index,1)
//         fs.writeFile("./products.json",JSON.stringify(productsArray),(err)=>{
//             if(err==null){
//                 res.end(JSON.stringify({"message":'product successfully deleted'}))

//             }
//             else{
//                 res.end(JSON.stringify({"message":'product not found'}))
//             }

//         })



//     }


// }).listen(8000)








// PUT/products?id=3|data in request body

const http = require('http');
const fs = require('fs');
const url = require('url');


http.createServer((req, res) => {

    let parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl.query.id)




    // readind the file asa string
    let products = fs.readFileSync('./products.json', "utf-8")
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET", "PUT", "PATCH", "DELETE", "OPTIONS");


    //fetch all products

    // HANDLING OPTIONS PREFILGHT REQUEST WHICH COMES BEFORE POST PUT AND DELETE AUTOMATICALLY.
    if (req.method == "OPTIONS") {
        res.end()

    }

    else if (parsedUrl.pathname == "/products" && req.method == "GET" && parsedUrl.query.id == undefined) {
        res.end(products)
    }
    //fetch all products based on id
    else if (parsedUrl.pathname == "/products" && req.method == "GET" && parsedUrl.query.id != undefined) {
        let productsArray = JSON.parse(products);

        let a = productsArray.find((product) => {//i need to post the data to the array based on id so i have converted to string to
            return product.id == parsedUrl.query.id;

        })
        if (a != undefined) {
            res.end(JSON.stringify(a))
        }
        else {
            res.end(JSON.stringify({ "message": 'product not found' }))
        }
    }
    // create new product
    else if (req.method == 'POST' && parsedUrl.pathname == "/products") {

        let product = '';
        //this event called for every chuk recweived
        req.on("data", (chunk) => {
            product += chunk

        })
        // this event is called at the end of the stream and converts bytes to readble string
        req.on("end", () => {
            let productsArray = JSON.parse(products);
            let newproduct = JSON.parse(product);

            productsArray.push(newproduct);

            fs.writeFile("./products.json", JSON.stringify(productsArray), (err) => {
                if (err == null) {
                    res.end(JSON.stringify({ "message": 'product added' }))

                }

            })
        })
        res.end("post working preperly")
    }
    else if (req.method == 'DELETE' && parsedUrl.pathname == '/products') {
        let id = parsedUrl.query.id

        let productsArray = JSON.parse(products);
        let index = productsArray.findIndex((product) => {
            return product.id == parsedUrl.query.id
        })

        productsArray.splice(index, 1)
        fs.writeFile("./products.json", JSON.stringify(productsArray), (err) => {
            if (err == null) {
                res.end(JSON.stringify({ "message": 'product successfully deleted' }))

            }
            else {
                res.end(JSON.stringify({ "message": 'product not found' }))
            }

        })
    }
    else if (req.method == 'PUT' && parsedUrl.pathname == "/products") {
        let id = parsedUrl.query.id
        let product = "";
        req.on("data", (chunk) => {
            product += chunk
        })
        req.on("end", () => {
            let productsArray = JSON.parse(products);
            let newproduct = JSON.parse(product);

            let index = productsArray.findIndex((product) => {
                return product.id == parsedUrl.query.id
            })

            if (index !== -1) {
                productsArray[index] = newproduct;

                fs.writeFile("./products.json", JSON.stringify(productsArray), (err) => {
                    if (err == null) {
                        res.end(JSON.stringify({ "message": 'product' }))

                    }
                    else {
                        res.end(JSON.stringify({ "message": 'product not found' }))
                    }

                })


            }
            else {
                res.end(JSON.stringify({ "message ": " element with given id is not found" }))
            }



        })

    }



}).listen(8000)