type Bird = {
    name : string,
};
type Animal = {
    type : string,
}
type OurBird = Bird & Animal;
let bird : OurBird  ={
     name : "Pi Pi",
     type : "Helo",
}
console.log(bird);