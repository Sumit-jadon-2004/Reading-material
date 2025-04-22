//Trim method
let newstr = prompt("enter your password");
console.log(newstr.trim())

//Lower and upper cases

let str = "Apna College"
console.log(str.toUpperCase())

//String method with argument
let name = "Sumit jadon";
console.log(name.indexOf("jadon"));

//method chaining;
let X = "   sumit   ";
 newX = X.trim().toUpperCase();
 console.log(newX)

 //String slice;
 let Msg = "Sumit jadon";
 console.log(Msg.slice(0, 5));
console.log(Msg.slice(-3));
console.log(Msg.slice(5));

//repeat and repalce methods;

let fruit = "mango";
console.log(fruit.replace("man" , "sut"));
//repeat 
console.log(fruit.repeat(5));