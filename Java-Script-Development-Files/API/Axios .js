let btn = document.querySelector("button");

btn.addEventListener('click' ,async ()=>{
    let fact = await getRandomFact();
    let p = document.querySelector('p');
    p.innerText = fact
})

let url =  "https://catfact.ninja/fact";

async function getRandomFact() {
   try{
    let res = await axios.get(url);
    return res.data.fact;
   }
   catch (e){
    return "Data not found"
   }
}
