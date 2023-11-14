type Human = {
    name : string,
    age : number,
    address ?: string;
}
function display(obj : Human){
    console.log(obj.address);
    console.log(obj)
}
display({
    name : "Nyan",
    age : 34,
    address : "Yangon",
})