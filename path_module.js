const path = require('path'); // if direct name then it will assume inbuilt module and if it has ./ then file in application

var pathObj = path.parse(__filename);

console.log(pathObj);