const stringList = ["abc","aa","abc","def","def"];



//!using anonymous function

const result = ()=>{
   
   const data = stringList.filter((item,i,arr)=>{
     return arr.indexOf(item)!==i;
   });
   console.log(data);
}

result();


//!using IIFE function

(function(){
   const data1 = stringList.filter((item,i,arr)=>{
      return arr.indexOf(item)!==i;
   });
   console.log(data1);
})();