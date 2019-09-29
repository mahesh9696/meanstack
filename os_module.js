const os = require('os'); // if direct name then it will assume inbuilt module and if it has ./ then file in application

var totalMemory = os.totalmem();

var freeMemory = os.freemem();

// Templete String
// ES6

console.log(`Total Memory ${totalMemory}`);
console.log(`Free Memory ${freeMemory}`);
