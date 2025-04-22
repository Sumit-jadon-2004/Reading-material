//Q 1
let ans = [7,9,0,-2];
let newans= ans.slice(0,3);
console.log(newans);

//Q 2   
let arr =[7,9,0,-2];
let newarr = arr.slice(arr.length-3);
console.log(newarr);

// Q 3
let str = prompt("plese enter your string");

if (str.length==0){
    console.log("string are empty");
}else {
    console.log("string are not empty");
}
// q4
let str2 = "ApNacollege";

let indx = 3;

if (str2[indx] ==str2[indx].toLowerCase()){
    console.log("character is lowercase");
}else{
    console.log("character in uppercase");
}

// Q5 
let str3 =prompt("please enter your string");
console.log(`your original string ${str3}`);
console.log(`your duplicate string ${str3.trim()}`);

// Q 6
let str4 =["Sumit" , "jadon" , 23 , 64 , 99 , -6] ;
let item = 67;
if (str4.indexOf(item)!=-1){
    console.log("present your value in array");
}else {
    console.log("your value in not present");
}