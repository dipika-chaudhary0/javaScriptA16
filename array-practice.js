const arr=[1,2,3,4,5,6,7,8,9,10];
const doubled=arr.map(n=> n*2);
console.log(doubled);
 const str=arr.map(a=>"number:(a)");
const evens=arr.filter((num)=>num%2==0);
console.log(evens);
const greaterNum= arr.filter(b=> b>5);
console.log(greaterNum);
const found=arr.map(c=> c>3);
console.log(found);
const firstNum=arr.map(d=> d%4==0);
console.log(firstNum);
const check=arr.some(m=>m<0);
console.log(check);
const check1=arr.some(m=>m>8);
console.log(check1);
 const every=arr.every(nums=> nums<=10);
 console.log(every);
 const positiveNum=arr.every(num1=> num1>0);
 console.log(positiveNum);
 arr.forEach((data,index)=>{
    console.log(data*index);

 })
 arr.forEach((data1)=>{
    if(data1%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
 })




