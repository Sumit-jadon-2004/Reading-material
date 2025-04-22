let btn = document.querySelector("button");
//Event Listerner
btn.addEventListener("click" , function(){
    console.log("You Click me !")
});
btn.addEventListener("dblclick" , function(){
    console.log("You dblClick me !")
});
btn.onmouseenter=function(){
    console.log("you enter btn")
}