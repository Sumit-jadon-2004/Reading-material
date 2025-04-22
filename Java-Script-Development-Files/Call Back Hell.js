let h1 = document.querySelector("h1");

function changecolor(color , delay , nextcolor){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextcolor)
            nextcolor()
    }, delay)
}

changecolor("red" , 1000, ()=>{
    changecolor("green" , 1000 , ()=>{
        changecolor("orange", 1000,()=>{
            changecolor("purple" , 1000)
        })
    })
})