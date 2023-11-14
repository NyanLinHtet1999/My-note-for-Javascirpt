export {};

class Human 
{
     name : string;
     age : number;
     constructor(name : string , age : number){
          this.name =  name ;
          this.age = age;
     }
}

type Consturct = {
     new (x : string, y :number) : object;
};

let NewClass : Consturct = Human;

let obj = new NewClass("MIn", 32);
console.log(obj);