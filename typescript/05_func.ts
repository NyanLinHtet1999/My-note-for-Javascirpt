export{}
function greet(msg:string){
    console.log(msg)
}
greet("Hello");

function add(a :number, b : number) : number{
    return a +b;
}
console.log(add(3,4))
let fruits : string[] = ["apple", "orange"];
fruits.map(fr => console.log(fr.toUpperCase()));

