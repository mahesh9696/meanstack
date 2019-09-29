const fs = require('fs'); // if direct name then it will assume inbuilt module and if it has ./ then file in application

const files = fs.readdirSync('./'); //synchronous

console.log(files);

//asynchronous
// const files = fs.readdir('./', function (error, files) {
//     if (error) console.log(error);
//     console.log(files);
// });