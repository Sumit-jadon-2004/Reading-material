let btn = document.querySelector('button');
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener('click' , async() =>{
    let result= await getimag();
    let img = document.querySelector('img');
    img.setAttribute("src" , result);
    img.innerText = result;
})



async function getimag(){
   try{
    let res = await axios.get(url);
    return res.data.message   
   } catch(err){
    console.log("error" , err)
   }
}