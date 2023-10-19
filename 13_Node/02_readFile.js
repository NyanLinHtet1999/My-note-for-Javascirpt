const fs = require("fs");

console.log("Before");

fs.readFile('./13_Node/data.txt', (err, data) => {
     if(!err)
     {
          console.log("In readFile");
          console.log(data.toString());
     }
     else {
          console.log(err);
     }
});

console.log("After");