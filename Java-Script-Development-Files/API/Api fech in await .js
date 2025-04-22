let url = "https://catfact.ninja/fact";

async function getrandom() {
   try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
   } 
   catch(err){
    console.log("erroe == ", err);
   }
}
console.log(getrandom())