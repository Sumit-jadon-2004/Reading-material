let url = "https://catfact.ninja/fact2";
fetch(url).then((res)=>{
    return res.json();
}).then((data)=>{
    console.log("your data2", data.fact)
    return fetch(url);
}).then((res)=>{
    return res.json();
}).catch((err)=>{
    console.log("Error" , err)
})