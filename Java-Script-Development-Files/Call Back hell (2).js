function savesdb(data , success , failure){
    let inter = Math.floor(Math.random()*10)+1;
    if (inter > 4){
       success();
    }else {
        failure();
    }
}
savesdb(
    "apna college",
    ()=>{
        console.log("Your data was save");
        savesdb(
            "sumit",
            ()=>{
                console.log("Data2 save");
                savesdb(
                    "jadon" ,
                    ()=>{
                        console.log("data3 save");
                    },
                    ()=>{
                        console.log("weak connection : Data3 not save")
                    }
                )
            },
            ()=>{
                console.log("weak connection : Data2 not save")
            }
        )
           
        
    },
    ()=>{
        console.log("weak connection data not save")
    },
    ()=>{
        console.log("weak connection : Data not save")
    }

)