//Functions in javascript

function hello(){
    console.log("Hello World");
}
hello();

function print1to5(){
    for(let i=0; i<=5; i++){
        console.log(i);
    }
}
print1to5();

//
function Dice(){
    console.log("Dice Roll No.");
    let dice = Math.floor(Math.random()*6)+1;
    console.log(dice);
}
Dice();

// print average
console.log("CalcAvg");
function clacAvg(a,b,c){
    let Avg = (a+b+c)/3;
    console.log(Avg);
}
clacAvg(2,4,6);

//N number 
console.log("N number table");
function table(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}
table(2);

//PRINT THE VALUE OF RETURN STATEMENT 
 console.log("Return statement to print num")
function OnetoN(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum+=i;
    }
    return sum ;
}
console.log(OnetoN(3));

//Array in concatination

let str = ["hii", "hello", "Bye", "!"];

function concat(str){
    let result ="" ;
    for(let i=0; i<str.length; i++){
       result += str[i];
    }
    return result;
}
console.log(concat(str));

// highter Function order 
console.log(" highter Function order ")
function Multiplefunction(func, n){
    for(let i=1; i<=n; i++){
        func();
    }
}
let ello=function(){
    console.log("namaste");
}
Multiplefunction(ello , 2);

//return functions

console.log("even or odd function");




function oddandeven(){
    if (request == "odd"){
       return function(n){
            console.log(!(n%2==0));
        }
    }else if (request == "even"){
        return function(n){
            console.log(n%2==0);
        }
    }else {
        console.log("your ans is wrong")
    }
}
let request = "odd";
let In =oddandeven(request);
console.log(In(4));


//Methods 

console.log("methods");

const calculater = {
    add : function(a,b){
        return (a+b);
    },
    mul : function(a,b){
        return (a*b);
    },
    sub : function(a,b){
        return (a-b);
    }
};
console.log(calculater.mul(4,3));

// This method 
console.log("THIS Method");

const student = {
    name : "sumit",
    age  : 23,
    eng : 47,
    math : 58,
    phy : 64,
    getAvg(){
        let avg =(this.eng + this.math + this.phy)/3;
        console.log(avg);
    }
}
console.log(student.getAvg());


//Try and Catch 

console.log("try and catch");

console.log("hello");
console.log("hello");
console.log("hello");
try{
    console.log(a);
}catch{
    console.log("a is not run");
}

console.log("hello2");
console.log("hello2");
console.log("hello2");


//Arrow Function

console.log("Arrow function");

const sum = (a,b)=>{
    console.log(a+b);
}
console.log(sum(2,3));

// Implicit return function 

console.log("Implicit return");

const sum2 = (a,b) => (a+b);
console.log(sum(2,3));

// set time out 
console.log("Set time Out function");
console.log("hello");
setTimeout(() => {
    console.log("Apna college")
}, 4000);
console.log("hi there")


// Set Interval 

let set = setInterval(() => {
    console.log("Sumit Jadon")
}, 2000);
console.log(set)


// this with Arrow Function

console.log("This with arrow function");

const student2 = {
    name : "Sumit",
    age : 23,
    prop : this ,
    getname  : function() {
        return this.name;
    },
    getage  : function() {
        return this.age;
    },
}
console.log(student2.getage())
console.log(student2.getname())


// practice Qution
console.log("print Square");
const square = (n)=>n*n;
console.log(square(3));

//Q2
console.log("print hello world 5 times")
const orld = setInterval(() =>{
    console.log("hello world");
},2000);
 setTimeout(()=>{
    clearInterval(orld);
 },10000);
 console.log(orld);


 // for each Function

 console.log("for each function")
 let arr = [1,2,3,4,5];

arr.forEach(function (el){
    console.log(el);
});

// map function
console.log("Map function");

let num =[1.2,3,4,5,6,7];

let double = num.map((el)=>{
    return el*2;
});
console.log(double)

//filter function

console.log("fillter function");

let arr3 = [2,3,4,5,6,7];

let nmb = arr3.filter((el)=> {
     return el*2;
})
console.log(nmb)

//reduce methods
console.log("Reduce elemennt")
let arr2 = [2,3,4,5];

let func = arr2.reduce((res , el)=> res+el);
console.log(func);

//Max number 

console.log("Max number");

let arr4 = [2,4,5,6,7,8,9];

let func2 = arr4.reduce((max ,el) =>{
    if (max < el){
        return el;
    }
    else {
        return max;
    }
});
console.log(func2)

// 10 divided 
console.log("divided by 10")
let func3 = arr4.every((el)=>(el%10==0));
console.log(func3)

// Default perameter
console.log("Default Prameter")
function sum3 (a,b=2){
    return a +b;
} 
console.log(sum3(2))

// spread 
//spread min and max
console.log("spread")
 let arr7 = [1,2,3,4,54,5,6,7,8,8,0]
let spr = Math.min(...arr7);
console.log(spr);

// object litral in spread

const obj ={
    email : "ironman@gmail.com",
    password : "abc",
}
const newobj = {...obj , id :123};
console.log(newobj)

//REST function
console.log("REST function")
function rest (...args){
    return args.reduce((res2 , el) => res2 +el );
}
console.log(rest(5,2,4,5,6))

// rest min

console.log (" Rest me minimum");

function minsum (msg , ...args) {
    console.log(msg);
    return args.reduce((min ,el)=>{
        if (min > el){
            return el;
        }else {
            return min;
        }
    });
} 

console.log( minsum("hello",12,3,5,56,6,6,3));


// Destructuring

let arr0 =["tony", "bruce", "steve", "peter"];

let [winner , runnerup , ...other] = arr0;
console.log(...other);

// object in Destructuring

let student4 = {
    name : "sumit",
    age : 23,
    username : "Sumitjadon_7017",
    password : "abc"
}

let  {password , username} = student4;

console.log(password +","+ username);