// Q 1

let num = [2,3,4,5,6,7,8,9];

const squar = num.map((num) => num*num);

console.log(squar);

let sum = squar.reduce((acc,el ) => acc+el, 0);

let avg = sum / num.length;
console.log(avg);

// Q 2

let numb = [2,4,6,8,10,12,-1,-2];

console.log(numb.map((numb) => numb + 5));

//  Q 3
let strings=["adam","bob","catlyn","donald","eve"];

console.log(strings.map((strings) => strings.toUpperCase()));

// Q 4 
const DoubleAndRectengle = (arr, ...el)=>[
    ...arr , ...el.map((v) => v*2),
];

console.log(DoubleAndRectengle([1,3,4,5],2,2));
console.log(DoubleAndRectengle([3],8,4));

// Q 5
let mergeObjects  = (obj1, obj2)=> ({
    ...obj1, ...obj2
});
console.log(mergeObjects({a:1,b:2},{c:3,d:4}));