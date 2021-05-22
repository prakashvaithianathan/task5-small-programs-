const numbers = [45,66,14,265,15,265,65,565,4];


//!using anonymous function

const result = function(){

    const output = numbers.reduce((prev, cur)=>{
        return prev + cur;
    },0);
    
    console.log(output);
}

result();

//!using IIFE function

(()=>{
    const output = numbers.reduce((prev, cur)=>{
        return prev + cur;
    },0);
    
    console.log(output);
    
})()
