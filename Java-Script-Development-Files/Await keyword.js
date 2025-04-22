let h1 = document.querySelector('h1');

function changecolor (data , delay){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            h1.style.color=data;
            resolve("color change");
        },delay);
    });
}

async function demo(){
    await changecolor("red", 1000);
    await changecolor("green", 1000);
    await changecolor("orange", 1000);
    await changecolor("purple", 1000);
    await changecolor("indigo", 1000);

    changecolor("violet", 1000);
}

demo()