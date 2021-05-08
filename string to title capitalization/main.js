// const text = "javscript is one of the most popular programming language across the world";
var a;

(function(text){
const sentence = text.toLowerCase().split(" ");

sentence.forEach((value,i)=>{
  sentence[i] =   sentence[i][0].toUpperCase()+ sentence[i].slice(1);
var output = sentence.join(" ");
a=output;
})


})("javascript is one of the most popular programming language across the world");

console.log(a);