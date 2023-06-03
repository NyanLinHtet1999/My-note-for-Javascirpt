let [x, y] = [1, 3];
console.log(x , y);
[x, y] = [x+ 3, y + 2];
console.log(x, y);

let [, ,a ,i] = [1,2,3,4];
console.log(a , i);

let [c , ...d] = [7, 6, 5, 4];
console.log(c, d);

let [first, ...last] = "Hello";
console.log(first , last);

let info = {name : "Nyan", age : 23};
let {name , age} = info;
console.log(name, age);

let points = [{x : 1, y :2}, {x : 3, y : 4}];
let [{x: x1, y : y1}, {x :x2, y : y2}] = points;
console.log(x1, y1, x2, y2);
