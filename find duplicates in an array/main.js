const stringList = ["abc","aa","abc","def","def"];

const findDuplicates = stringList.filter((item,i,arr)=>{
   return arr.indexOf(item)!==i
})
console.log(findDuplicates);


console.log(stringList.indexOf("def")!==3);