const numbers = [56,26,546,2,1,3,55,99,898,656,3,33,52];


//!using anonymous function

const result = ()=>{
    const oddNumbers = numbers.filter((value)=>{
        return value%2!=0;
    })
    console.log(oddNumbers);
}
result();

//!using IIFE function function

(function(){
    const oddNumbers = numbers.filter((value)=>{
        return value%2!=0;
    })
    console.log(oddNumbers);

})();