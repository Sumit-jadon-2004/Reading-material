// Q 1
let num = 20;

if (num%10==0){
    console.log("god");
}else {
    console.log("bad");
}
// Q 2

let name = prompt("enter your name");
let age = prompt("enter your age");

console.log(`"your name and age"${name} , ${age} `);

// Q 3
let quater = 2;

switch (quater){
 case 1 :
    console.log("January,February,March");
    break;
    case 2 :
    console.log("April,May,June");
    break;
    case 3 :
    console.log("July,August,September");
    break;
    case 4 :
    console.log("October,November,December");
    break;
    default : console.log("not a quater")
}

// Q 4
let str = "apples"

if ((str[0] ==="a") ||(str[0]==="A") && (str.length>5)){
    console.log("golden string");
}
else {
    console.log("this is not a golden string");
}

// Q 5

let a = 25;
let b = 18;
let c = 13;

if (a>b){
    if (a>c){
        console.log("a is greter")
    }
    else {
        console.log("c is greter")
    }
}
else{
    if (b>c){
        console.log("b is greter");
    }else {
        console.log("c is greter");
    }
}

let num1 = 32;
let num2 = 47852;

if ((num1 % 10 )==(num2%10)){
    console.log("last digit is same in this value" ,num1%10);
}else {
    console.log("last digit is not a same")
}