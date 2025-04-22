let baseURL = "http://universities.hipolabs.com/search?name=";
 let btn = document.querySelector('button');

 btn.addEventListener('click' , async()=>{
    let inp = document.querySelector('input').value;
    
    let collArr = await getcollege(inp);
    setcol(collArr);
 })

 async function fillerdColleges() {
   if (country == ["state-province"]){
      console.log()
   }
 }
 async function setcol(collArr) {
    let list = document.querySelector('#list');
    list.innerText="";
    for(let col of collArr){
        console.log(col.country);
        let li = document.createElement('li');
        li.innerText=col.name;
        list.appendChild(li);
    }
 }
 async function getcollege(inp) {
   let url = baseURL + inp ;
    let res = await axios.get(url);
    console.log(res);
    return res.data
 }
