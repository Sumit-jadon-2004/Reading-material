//Q 1

    let arr = [8,9,10,1,2,3,4,5,6,7];

    let nums = 5;

    function getelemnt(arr, nums) {
        for(let i=0; i<=arr.length; i++){
            if (arr[i] > nums){
               console.log(arr[i]);
            }
        }
    }
    getelemnt(arr,nums);


    // Q 2

    let str = ["abcdabcdefgggh"];
    
    function getuniq(str){
        let ans ="";
        for (let i=0 ; i<str.length; i++){
            let currch = str[i];
            if (ans.indexOf(currch)==-1){
                ans +=currch;
            }
        }
        return ans;
    }
   console.log( getuniq(str));

   //Q 3

   let country  = ["Australia","Germany","UnitedStatesofAmerica"];

   function largestname(country){
    let ansindx = 0;
    for(let i=0; i<country.length; i++){
        let anslen = country[ansindx].length;
        let currlen = country[i].length;
        if(currlen>anslen){
            ansindx = i;
        }
    }
    return country[ansindx];
   }
   console.log(largestname(country));

   // Q 4

  let str1 = "apnacollege";

  function getvoibile(str1){
    let count = 0;
    for(let i=0; i<str1.length; i++){
        if (str1.charAt(i)== "a" || str1.charAt(i) == "e" ||str1.charAt(i) == "i" ||str1.charAt(i) == "o"||str1.charAt(i) == "u"  ){
            count++;
        }
    }
    return count;
  }
  console.log(getvoibile(str1))


  //Q 5

  let start = 100;
  let end = 200;

  function getgenerat (start , end){
    let diff = end-start;
    return Math.floor(Math.random()*diff) +start;
  }
  console.log(getgenerat(start ,end));

  // Q 6

  const average = (arr)=>{
    let total =0;
    for (let number of arr){
        total += number
    }
    return total / arr.length
  };
  let arr4 = [1,2,3,4,5,6];
  console.log(average(arr))