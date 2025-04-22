let newp = document.createElement('p');
newp.innerText="hi i am red"
document.querySelector('body').append(newp);
newp.classList.add("red");

//q2
let newh = document.createElement("h3");

newh.innerText="i am blue !"
document.querySelector("body").prepend(newh);
newh.classList.add("blue")

//q 3

let newdiv = document.createElement('div');

document.querySelector('body').prepend(newdiv);
newdiv.classList.add('div');

let newheading = document.createElement('h1');

document.querySelector('div').append(newheading)
newheading.innerText="i am in a div";

let newpara = document.createElement('p');
document.querySelector('div').append(newpara);
newpara.innerText="mee too!"