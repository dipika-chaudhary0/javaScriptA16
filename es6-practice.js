// const city="Kathmadu";
// const city2="Bhaktapur";
// console.log(`Welcome to ${city} & ${city2}`);

// const [a,b]=[100,200];
// console.log(a,b);

// const obj={product:"Mobile", price:20000};
// const {product,price}=obj;
// console.log(product,price);

// function sayHi(name="john",place="Kathmandu"){
//     console.log(`Hii,${name}`);
// }
// sayHi();
// sayHi("dipika","Kirtipur");

// const arr1=[1,2];
// const arr2=[...arr1,3,4];
// console.log(arr2);

// const user={username:"admin"};
// const details={ ...user,name:"Dipika", location:"ktm"};
// console.log(details);

// function multiplyAll(...nums){
//     return nums.reduce((acc,curr)=>acc*curr,1);
// }
// console.log(multiplyAll(2,3,4));

// const user={profile:" "}
// console.log(user.profile.name);

// const loginStatus=undefined;
// const result=loginStatus??"offline";
// console.log(result);

// const msg=" ";
// const fallback=msg||"No message";
// console.log(fallback);

const isLoggedIn=true;
const message=isLoggedIn&&"Welcome";
console.log(message);

console.log(!!"");      // false - empty string is falsy
console.log(!!"ok");    // true - non-empty string is truthy
console.log(!!0);       // false - zero is falsy
console.log(!!100); 



