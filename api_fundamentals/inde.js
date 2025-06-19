const http = require('http')

// // create a server



// http.createServer((req, res) => {
//     console.log("Hello");
//     console.log(req.method); // Changed from res.url to req.url


//     res.end("Hello this is the first response");
// })
//     .listen(8000)









http.createServer((req, res) => {
    console.log(req.url);


    if (req.url === '/add') {
        res.end('Added Data');
    } else if (req.url === '/update') {
        res.end('Updated Data');
    } else {
        res.end("Hello this is the first response");
    }
}).listen(8000, () => {
    console.log("Server is running on http://127.0.0.1:8000/");
});







// http.createServer((req, res) => {
//     console.log(req.method); 
//      console.log(req.method); 

//     if (req.url === '/products' && req.method === 'GET') {
//         res.end('get products data');
//     } else if (req.url === '/products' && req.method === 'PUT') {
//         res.end('create product data');
//     } else {
//         res.end("Hello this is the first response");
//     }
// }).listen(8000, () => {
//     console.log("Server is running on http://127.0.0.1:8000/");
// });


