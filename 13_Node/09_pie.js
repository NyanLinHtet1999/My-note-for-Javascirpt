const fs = require("fs");

function printFile(filename, encoding="utf8") 
{ 
    fs.createReadStream(filename,encoding)
      .pipe(process.stdout);
}
printFile('./13_Node/09_pie.js');