//for loop
for(let i=1; i<=5 ; i++){
    console.log(i)
}

//  fOR LOOP odd 
console.log("odd number")

for(let i=1; i<=15; i=i+2){
    console.log(i)
}

// even number
console.log("even number")

for (let i=2; i<=10; i=i+2){
    console.log(i);
}
//five multiple table
    console.log("five multiple table");

    let n = prompt("enter your number")
    n=parseInt(n)
for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}

//Inner loop and outer loop
    console.log("enter outer and inner loop")
for (let i=0; i<=3; i++){
    for(let j=0; j<=3; j++){
        console.log(j);
    }
}

//while loop
console.log("While loop")
let i =0;
while(i<=5){
    console.log(i);
    i++;
}

// favorite movies

    let favmovie = "avatar";
    let guess = prompt("enter your movies");
    while((guess!=favmovie)){
        if(guess!="quit"){
            console.log("yiu are quit");
            break;
        }
        guess=prompt(" wrong answer re enter your movies");
     console.log(guess)
    }

    //break statement
console.log("break statement")
    let k=1;
    while(k<=10){
        if(k==3){
            break;
        }
        console.log(k);
        k++;
    }

    //Loop in arrays
    console.log("Loop in arr")
    let arr = ["orang", "mango", "banana", "litchi", "apple"];
    for (let i=0; i<arr.length; i++){
        console.log(i,arr[i]);
    }

    //LOOP in nested array
    console.log("your heroes name");
    let heroes = [["iron man","spiderman", "hulk"],["wonder woman", "superman", "thor"]];

    for(let i=0; i<heroes.length; i++){
        for(let j=0; j<heroes[i].length; j++){
            console.log(`j=${j},${heroes[i][j]}`);
        }
    }

    //for of LOOP
    console.log("for of loop")
    let fruits = ["mango","orange","apple"];
    for (fruit of fruits){
        console.log(fruit);
    }

    //for of nestedloop 
    console.log("for of nestedloop");
    let hero =  [["iron man","spiderman", "hulk"],["wonder woman", "superman", "thor"]];
    for(list of hero){
        for(heros of list){
            console.log(heros);
        }
    }