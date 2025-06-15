//I will call back later(After executing initial function)
//function
function greet(name,callback){
    console.log(`Hello${name}!`);
    callback();
}
//callback function
function callMe(){
    console.log("Its a callback function!");
}
//passing function as an argument
 greet('Peter',callMe);

 //console after 2 sec delay
 //setTimeout(()=>console.log("Hello world"),2000)
 //setInterval(()=>console.log("Hello World!"),2000);

 