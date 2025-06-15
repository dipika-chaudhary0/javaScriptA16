//Backtick
// const personName="Ramesh";
// console.log("hello, "+personName);
// console.log(`hello, ${personName}`);

// const { useEffect } = require("react");

// var sum=2;
// function add(){
//     var sum=10+20;
//     console.log(sum);
// }
// add();
// console.log(sum);

// Array destructuring

// const[a,b]=[1,2];
// console.log(b);

// object destructuring

// const user={name:"Hari",age:30};
// const{name,age}=user;
// console.log(name,age);

// //Assign parameter value
// function greet(name="guest"){
//     console.log(`hello,${name}`)
// }
// greet();

// Spread operator
// const arr1=[1,2];
// const arr2=[...arr1,3,4]; //[1,2,3,4]
// console.log(arr2);

// const userDetail={name:"Sita"};
// const newUser={...userDetail, age:25};
// console.log(newUser);

//Rest parameters
// function sum(...nums){
//     return nums.reduce((acc,curr)=> acc+curr,0);
// }
// console.log(sum(5,6));

// Optional chaining
// const userProfile={profile: undefined};
// console.log(userProfile?.profile?.name);

// const profile={
//     profile:{
//         name:"ram"
//     }
// };
// const userProfileName=profile.profile?.name; //"ram"
// const phone=profile.contact?.phone; //undefined(no error)

// // Nulish coalescing
// const input=null;
// const result=input??"Guest"; //if input=null the value of result will be guest
// console.log(result);


// Logical && and ||

const username=""||"Anaonymous";
const userAge=0||25;//0=false
console.log(userAge,username);

const isLoggedIn=true && "Welcome";
const isOnline=false&&"You are online";
console.log(isLoggedIn,isOnline);

// //Double Not(!!)
// !!0 //false
// !!"hello"//true
// !![] //true


