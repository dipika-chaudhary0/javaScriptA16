//Like a real promise
const result=new Promise((resolve,reject)=>{
    const gift="watch";
    if(gift.startsWith("watch")){//gift==="watch"
        resolve("Thank you for the gift!");
        //You fullfill your promise
    }
    else{
        reject("I want a watch as a gift!");
        //You didnot fullfill your promises
    }
});
result
//Console data if you fulfill your promises
.then((data)=>{
    console.log(data);
    return"Again thank you";
})
.then((data)=>{
    console.log(data);
    
})
.catch((err)=>console.log(err,"Error"))//Console error if you didnot fullfill your promises
.finally(()=>console.log("Successfull promise operation!"));//check if promises execution is successfull