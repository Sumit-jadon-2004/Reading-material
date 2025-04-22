let inp = document.querySelector('input');
let h = document.querySelector('h1');

inp.addEventListener("input" , function(){
    const finalvalue = inp.value.replace(/[^a-zA-Z ]/, '');
    h.textContent = finalvalue;
    
})