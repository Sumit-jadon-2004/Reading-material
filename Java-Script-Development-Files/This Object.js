let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let btn = document.querySelector("button");

function changecolor(){
    console.log(this.innerText);
    this.style.backgroundColor="blue";
}

h1.addEventListener("click", changecolor);
h2.addEventListener("click" , changecolor);
h3.addEventListener("click", changecolor);
h4.addEventListener("click", changecolor);
btn.addEventListener("click", changecolor);
