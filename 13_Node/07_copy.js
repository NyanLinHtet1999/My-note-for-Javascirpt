const fs = require("fs");

console.log('Before');
fs.readFile('./13_Node/data.txt',(err,data)=>{
    if(!err)
    {
       fs.writeFile('./13_Node/data-copy.txt',data,(error,data)=>{
        console.log('File copied');
       });
    }else {
     console.log(err);
    }
});
console.log('End');