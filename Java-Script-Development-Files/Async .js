async function savedb(){
  throw"error"
    return "hello!";
}

savedb().then((result)=>{
    console.log("your data was save",result)
}).catch((error)=>{
    console.log("your data reject" , error)
})
console.log(savedb());