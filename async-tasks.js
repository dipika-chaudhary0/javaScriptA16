//callbacks
// function greetUser(name,callback){
//     console.log(`Welcome${name}`);
//     callback();
// }
// function showTime(){
//     const now = new Date();
//     console.log("Current time",now.toLocaleTimeString());
    
// }
// greetUser(" Ram",showTime);

// function processOrder(confirmOrder){
//     console.log("Processing your order")
//     confirmOrder()
// }
// function confirmOrder(){
//     console.log("Order confirmed!");
// }
// processOrder(confirmOrder);

//Promise

// const myPromise=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Resolved successfully");
// },2000);
// });
    
    
// myPromise
// .then((data)=>{
//     console.log(data);
// })
// .finally(()=>{
//     console.log("Finished executing promise");
// })
let value=5;
const chechValuePromise=new Promise((resolve,reject)=>{
    if(value!=10){
        reject("Somethong went wrong")
    }
})
chechValuePromise
.catch((err)=>console.log(err,"Error"))