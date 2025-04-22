const max = prompt("enter your number!!");

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("guess your number!!");
while(true){
    if(guess=="quit"){
        console.log("Quit the game");
        break;
    }
    if(guess==random){
    console.log(`congrats !! your number is guess ${random}`)
        break;
    }
    else if (guess < random){
       guess= prompt("your number is so smaller !! please try again");
    }else {
       guess= prompt("your number in so large please try again!!")
    }
}