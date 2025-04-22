let btn = document.querySelector('button');

btn.addEventListener("mouseout" , function(){
    console.log("Mouse OUT in btn !")
});
btn.addEventListener("keypress" , function(){
    console.log("You key pressed !")
});
// btn.addEventListener("scroll" , function(event){
//     this.onscroll =event
//     console.log("You scroll !")
// });


//  Q 2

let btn2 = document.createElement('button');
btn2.innerText="Submit !"
document.querySelector('body').append(btn2);

btn2.addEventListener("click" , function(){
    btn2.style.backgroundColor="green";
    btn2.style.color="pink"
})
