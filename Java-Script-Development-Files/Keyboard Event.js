let btn = document.querySelector("input");

btn.addEventListener("keyup",function (event){
    if (event.code=="ArrowUp"){
        console.log("you move in Up")
    } else if (event.code=="ArrowDown"){
        console.log("you move in Down")
    }else if (event.code=="ArrowLeft"){
        console.log("you move in Left")
    }else if (event.code=="ArrowRight"){
        console.log("you move in Right")
    }
});