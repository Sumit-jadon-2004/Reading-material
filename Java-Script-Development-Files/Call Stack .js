function one(){
    return 1;
}
 function two(){
    return one()+one();
 }

 function Three(){
    let ans = two() + one();
    console.log(ans);
 }

 Three();