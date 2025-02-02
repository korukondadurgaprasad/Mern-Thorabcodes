
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

//     let parsedUrl = url.parse(req.url,true);
//     console.log(parsedUrl)
//         if (req.url === '/products' && req.method === 'GET') {
//         fs.readFile("./products.json", 'utf-8', (err, data) => {
//             if (err == null) {
//                 res.end(data); // Sending the contents of products.json
//             } else {
//                 res.end("There was a problem reading the file.");
//             }
//         });
//     }
    

// }).listen(8000)



// Fetch a single product based on id

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

const http = require('http');
const fs = require('fs');
const url = require('url'); 


http.createServer((req, res) => {

    let parsedUrl = url.parse(req.url,true);
    console.log(parsedUrl.query.id)

// readind the file asa string 
    let products=fs.readFileSync('./products.json',"utf-8")

//fetch all products

    if(parsedUrl.pathname=="/products" && req.method=="GET" && parsedUrl.query.id==undefined){
        res.end(products)
    }
    //fetch all products based on id
    else if(parsedUrl.pathname=="/products" && req.method=="GET" && parsedUrl.query.id!=undefined)
    {
        let productsArray=JSON.parse(products);

        let a= productsArray.find((product)=>{//i need to post the data to the array based on id so i have converted to string to
            return product.id==parsedUrl.query.id;

        })
        if (a!=undefined){
            res.end(JSON.stringify(a))
        }
        else{
            res.end(JSON.stringify({"message":'product not found'}))
        }
    }
     // create new product
    else if (req.method=='POST' && parsedUrl.pathname=="/products")
    {

        let product='';
        //this event called for every chuk recweived
        req.on("data",(chunk)=>{
            product+=chunk

        })
        // this event is called at the end of the stream and converts bytes to readble string 
        req.on("end",()=>{
            let productsArray=JSON.parse(products);
            let newproduct=JSON.parse(product);

            productsArray.push(newproduct);

            fs.writeFile("./products.json",JSON.stringify(productsArray),(err)=>{
                if(err==null){
                    res.end(JSON.stringify({"message":'product added'}))

                }

            })
        })
        res.end("post working preperly")
    }
    

}).listen(8000)