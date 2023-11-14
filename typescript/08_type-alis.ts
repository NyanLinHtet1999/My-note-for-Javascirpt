type Circle = {
    radius : number
};

type Rectangle = {
    width: number,
    height : number,
}
type Shape = Circle | Rectangle;

let shape: Shape ;
shape = {
    radius : 20
};
shape = {
    width : 10,
    height: 20
}
