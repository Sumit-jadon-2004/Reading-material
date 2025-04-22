// Arrays;

let student = ["sumit" , "Ankit" , "pushpendra"];
console.log(student);

//array mutable;

let arr = ["banana" , "mango" , "lichi"];

arr[0] ="apple";
console.log(arr);

//Push and popo functions;
let name = ["sumit","Ankit","pushpenra"];
let newname =name.push("Mamta");
name.pop();
name.unshift("mamta")
name.shift();
console.log(name);

//concat and reverse
let primary =["red","yellow","blue"];
let secondary = ["orange","green","violet"];
console.log(primary.concat(secondary));
console.log(primary.reverse());

// slice
console.log(primary.slice(2));
console.log(primary.slice(1,2));
console.log(primary.slice(-2));

//splice in array;

let color = ["red","yellow","blue","orange","green","violet"];
console.log(color.splice(1,0 ,"pink"));

// sorted in array
let sort = ["red","yellow","blue","orange","green","violet"];
console.log(sort.sort());
