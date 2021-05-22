const number = 5234496669694;


//!using anonymous function

// const result = function(){
//     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }
// console.log(result());


//!using IIFE function 

(()=>{
    const result = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(result);
})();