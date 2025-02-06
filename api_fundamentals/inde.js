// const http = require('http')

// // create a server
// // Ip of server 127.0.0.1:8000 - server port num
// http.createServer((req, res) => {
//     console.log("Hello");

//     res.end("Hello this is the first response");
// })
//     .listen(8000)








// const http = require("http");

// http.createServer((req, res) => {
//     console.log(req.url); // Changed from res.url to req.url
//     // console.log(req.method); // Uncomment if you need to log the HTTP method

//     if (req.url === '/add') {
//         res.end('Added Data');
//     } else if (req.url === '/update') {
//         res.end('Updated Data');
//     } else {
//         res.end("Hello this is the first response");
//     }
// }).listen(8000, () => {
//     console.log("Server is running on http://127.0.0.1:8000/");
// });





const http = require("http");

http.createServer((req, res) => {
    console.log(req.method); // Changed from res.url to req.url
    // console.log(req.method); // Uncomment if you need to log the HTTP method

    if (req.url === '/products' && req.method === 'GET') {
        res.end('get products data');
    } else if (req.url === '/products' && req.method === 'PUT') {
        res.end('create product data');
    } else {
        res.end("Hello this is the first response");
    }
}).listen(8000, () => {
    console.log("Server is running on http://127.0.0.1:8000/");
});


