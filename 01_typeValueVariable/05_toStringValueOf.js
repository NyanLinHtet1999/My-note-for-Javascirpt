let info = {
     name : "Nyan",
     toString : function () {
          console.log("toString is called");
          return "Hello";
     },
     valueOf : function (){
          console.log("valueOf is called");
          return 32;
     }
}
console.log(String(info));
console.log(Number(info));
console.log(info + "");
console.log(+info);

console.log(+[]);
console.log(+["99"]);

console.log(["a", "b"]+ "");  
console.log([] + "");