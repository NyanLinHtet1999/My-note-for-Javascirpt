let x : "Hello" ;
x = "Hello";

function display(x : string | null) {
    if (x === null){
        console.log("x is null");
    }else {
        console.log("x is string");
    }
}
display(null);