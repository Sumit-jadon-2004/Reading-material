let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ol = document.querySelector('ol');

btn.addEventListener("click" , function(){
    let lis = document.createElement('li');
    lis.innerText=inp.value;
    
    let delbtn = document.createElement("button");
    delbtn.innerText="Remove";
    delbtn.classList.add("remov")
    lis.appendChild(delbtn);
    ol.appendChild(lis)
    if (inp.value==""){
        lis.remove()
        alert("please add your task")
    }
    inp.value=""
})

ol.addEventListener("click" , function(event){
    if (event.target.nodeName=="BUTTON"){
        let list = event.target.parentElement;
        list.remove();
    }
});