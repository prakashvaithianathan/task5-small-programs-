const data = ["123321","madam","prakash","ab1221ba"];

data.forEach((stringData,i)=>{
    for(i =0;i<stringData.length;i++){
        stringData[i];
        if (stringData[i] !== stringData[stringData.length - 1 - i]) {  
            console.log( 'It is not a palindrome');  
            return 
        }  
        else{
            console.log("It is a palindrome");
            return
        }
    }  
    
})
