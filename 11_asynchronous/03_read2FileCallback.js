const fs = require("fs");

console.log("Before");
fs.readFile('./11_asynchronous/hello.txt',(err, data) => {
     if(!err){
          fs.readFile('./11_asynchronous/hello2.txt', (err, data1) =>{
               console.log("Data read done");
               console.log(data.toString().length);
               console.log(data1.toString().length);
          })
     }
})
console.log("end");