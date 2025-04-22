console.log("hello world");
let a = 3;
let b = 5;
console.log(`your sum is : ${a+b} sum`);

let age = 19;
if(age > 18){
    console.log("you can vote")
}
else if (age>12){
    console.log("you can not vote")
}

let popcone = "s";
if (popcone=="xl"){
    console.log("price in xl : 250")
}
else if (popcone=="l"){
    console.log("price in l : 200")
}
else if (popcone=="m"){
    console.log("price in m : 100")
}
else if (popcone=="s"){
    console.log("price in s : 50")
}


let str = "apple";

if (str[0] === "a" && str.length>=3){
    console.log("true")
    console.log("good string")
}
else {
    console.log("false")
}


let num = 6;

switch(num){
    case 1 : 1 ;
    console.log("Monday");
    break;
    case 2 : 2 ;
    console.log("tuesday");
    break;
    case 3 : 3 ;
    console.log("wednesday");
    break;
    case 4 : 4 ;
    console.log("thursday");
    break;
    case 5 : 5 ;
    console.log("friday");
    break;
    case 6 : 6;
    console.log("saturday");
    break;
    case 7 : 7;
    console.log("sunday");
    break;
    default:
        console.log("wrong day")

}


let firstname = prompt("enter your first name");
let lastname = prompt("enter your last name");
console.log("your name is " + firstname , lastname + "!")