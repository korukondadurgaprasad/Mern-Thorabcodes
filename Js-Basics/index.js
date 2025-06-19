const fs =require('fs');
const os =require('os');

// // sync way of reading
// let data=fs.readFileSync('./adc.txt','utf-8');
// console.log(data)






//async way of reading 

// console.log('Line 1')
// fs.readFile('./adc.txt','utf-8',(err,data)=>{
//     console.log(err);
//     console.log(data);

// })

// console.log("Some random Code")






//Write file
fs.writeFileSync('./products.txt','Apple');

fs.writeFile('./products.txt','Mongo',(err)=>{
    console.log(err);
}) 
// removing the past a data and adding new data appale is replaced with mango



// fs.appendFile('./products.txt','\nGrapes',(err)=>{
//     console.log(err);
// })


fs.unlinkSync('./products.txt')


// console.log(os.platform())
// console.log(os.hostname())
// console.log(os.type())