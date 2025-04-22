let btn = document.querySelector('button');

btn.addEventListener("click", function(){
    let h3 = document.querySelector('h3');
    let randomcolor = getcolor();
    h3.innerText = randomcolor;

    let div2 = document.querySelector('div');
    div2.style.backgroundColor = randomcolor; // Fixed camelCase issue
});

function getcolor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`; // Fixed RGB format
    return color;
}
