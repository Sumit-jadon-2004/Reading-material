console.dir(document.all[8].innerText="Sumit");


// get element by Id
console.dir(document.getElementById("mainImg"));
let dir = document.getElementById("mainImg");
console.log(dir.src="assets/creation_2.jpeg");


// select by Class name 

let dire = document.getElementsByClassName("oldImg");

for (let i=0; i<dire.length; i++){
    dire[i].src="assets/spiderman_img.png";
    console.log(`your imag change is ${i}`);
}

// Query selector 

console.dir(document.querySelector("p"));

console.dir(document.querySelector("#mainImg"));

console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll("p"));


// manipulation 

let obj = document.querySelector("#mainImg");

obj.setAttribute("src", "assets/creation_3.jpeg");


// Style manipulation

let obj1 = document.querySelectorAll(".box a");

for(let i=0; i<obj1.length; i++){
    obj1[i].style.color="purple";
}

// Class Property

let bgcolor = document.querySelector(".box");
 
bgcolor.classList.add("yellowbg");

// Navigation

let nav = document.querySelector('#mainImg');

console.log(nav.previousElementSibling.style.color="green");

console.log(nav.nextElementSibling.style.color="green");


// Apend child 
let box = document.querySelector('.box')
let btn = document.createElement('button');

console.dir("btn");
btn.innerText="click me";
box.appendChild(btn);

let newp = document.createElement('p');
 console.dir(newp)
 newp.innerText="hi iam sumit";
 box.appendChild(newp);

newp.append("  i am software engineer");

box.prepend(newp);

// Adjestment element 
let newbtn = document.createElement("button");
 let ewp = document.querySelector('p');

 newbtn.innerText="submit";

 ewp.insertAdjacentElement("beforebegin" , newbtn);//four type of position
                                                    //1 beforebegine
                                                    //2 afterbegine
                                                    //3 beforeend
                                                    //4 afterend


//remove element 
let body = document.querySelector('body');
body.removeChild(newbtn)
