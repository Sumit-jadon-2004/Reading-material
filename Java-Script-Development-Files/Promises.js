function savedb(data){
    return new Promise((succes , reject)=>{
        
            let inter = Math.floor(Math.random()*10)+1;
            if (inter>4){
                succes("Data was save");
            }else {
                reject("weak connection was not save")
            }
    })
   
}

savedb("apna college")
.then((result)=>{
    console.log("data 1 was save");
    console.log("result :",result);
    return savedb("sumit");
}).then((result)=>{
    console.log("data 2 was save");
    console.log("result :",result);
    return savedb("aman")
}).then((result)=>{
    console.log("Data 3 was save")
    console.log("result :",result);
})
.catch(()=>{
    console.log("promise not save")
})