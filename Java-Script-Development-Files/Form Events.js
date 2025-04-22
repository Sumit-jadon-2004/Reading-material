let form = document.querySelector("form");

form.addEventListener("submit" , function(event){
    event.preventDefault();
   
    let user=this.querySelector(".user") // type 1
   let pass= this.elements[1]; // type 2

   console.log(user.value);
   console.log("your pass" +" "+ pass.value);
})