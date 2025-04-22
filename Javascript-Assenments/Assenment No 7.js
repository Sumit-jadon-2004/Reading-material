// Q 1

let input = document.createElement('input');
let btn = document.createElement('button');

document.querySelector('body').append(input);
document.querySelector('body').append(btn);

btn.innerText="Click me";

// Q2

input.setAttribute("placeholder" , "username");
btn.setAttribute('id', 'btn')

//Q3

document.querySelector('btn');
btn.classList.add('newbtn')

// Q4 

let h1 = document.createElement('h1');
document.querySelector('body').append(h1);
h1.innerHTML="<u>DOM Practice</u>";


// Q 5

let para = document.createElement('p');

document.querySelector('body').append(para);
para.innerHTML="Apna College<b> Delta </b>Practice"
