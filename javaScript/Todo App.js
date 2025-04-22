let todo =[];
let req = prompt("enter your req");
while (true){
    if (req=="quit"){
        console.log("quiting app");
        break;
    }
    if (req=="list"){
        console.log("----------")
        for (let i=0; i<=todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("------------");
    }
    else if (req=="add"){
        let task = prompt("enter your task to add the task");
        todo.push(task);
        console.log("task add");
    }
    else if (req=="delete"){
        let idx = prompt("enter delete index");
        todo.splice(idx , 1);
        console.log("indx deleted")
    }
    else {
        console.log ("wrong request");
    }
    req = prompt("enter your req");
    
}