let newbtn = document.querySelectorAll('button');



for(let i=0; i<newbtn.length; i++){
    newbtn[i].onclick = sayhi;
    newbtn[i].onmouseenter=function (){
        console.log("you enter")
    }
}
function sayhi(){
    console.log("hi");
}