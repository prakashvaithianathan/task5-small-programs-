// const text = "javscript is one of the most popular programming language across the world";
var a;

//!using IIFE function
(function(text){
const sentence = text.toLowerCase().split(" ");

sentence.forEach((value,i)=>{
  sentence[i] =   sentence[i][0].toUpperCase()+ sentence[i].slice(1);
var output = sentence.join(" ");
a=output;
})


})("javascript is one of the most popular programming language across the world");

console.log(a);

//!using anonymous function

const result = (text)=>{
  const sentence = text.toLowerCase().split(" ");

  sentence.forEach((value,i)=>{
    sentence[i] =   sentence[i][0].toUpperCase()+ sentence[i].slice(1);
  var output = sentence.join(" ");
  a=output;
  })

}

result("javascript is one of the most popular programming language across the world");
console.log(a);