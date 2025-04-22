//  Q 1
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for (let i=0; i<arr.length; i++){
    if (arr[i]==num){
        arr.splice(i , 1);
    }
    console.log(arr)
}
//  Q 2

let nums = 287152;
let count = 0;

let copy = nums;
while (copy > 0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);

//Q 3

let nums2 = 287152;
let sum = 0;
let copy2 = nums2;
while(copy2>0){
    digit=copy2%10;
    sum+=digit;
    copy2=Math.floor(copy2/10);
}
console.log(sum);

// Q 4

let n =5;
let factorial = 1;
for (let i=1; i<=n; i++){
    factorial*=i;
}
console.log(`factorial ${n} is ${factorial}`);

// Q 5 

let arr1 = [2,5,10,4,2,7,1,9];
let largest = 0;

for (let i=0; i<=arr1.length; i++){
    if (largest<arr[i]){
        largest =arr[i];
    }
}
console.log(largest);