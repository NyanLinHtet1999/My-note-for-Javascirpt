const fs = require("fs");

console.log('One');
fs.promises.readFile('./name.txt')
           .then(fileName=>fs.promises.readFile(fileName))//box. Box(f->Box(value))
           .then(data=>console.log('Data ',data.toString().length));
console.log('Two');