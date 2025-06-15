const nums=[1,2,3];
// array.map()=>transfrom each element and return a new array
const doubled=nums.map((data)=>data*2);
console.log(doubled);

//array.filter()=> return elements that match a condition
const evens=nums.filter((n)=>n%2==0);
console.log(evens);

//array.find()=>find the first element matching condition
const found=nums.find((n)=>n>1);
console.log(found);

//array.some()=> check if any elements matches condition return 
const hasEven=nums.some(n=>n%2==0);//true
console.log(hasEven);

//array.every()=> check if all elements matches condition
const allpositive=nums.every(n=>n>=2);//true
console.log(allpositive);

nums.forEach((data,index)=>{
    console.log(data*index);
})

//array.reduce()=>reduce array to a single value
const sum=nums.reduce((acc, curr)=> acc+curr,0); //6 acc=0+curr
console.log(sum);

