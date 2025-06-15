const array=[1,2,3,4,5];
array.push(6,7);
console.log(array);
array.pop();
console.log(array, array.length);

array.unshift("A","B");
console.log(array);
const removeFirstValue= array.shift();
console.log(removeFirstValue);
const array2=["a","b","c"];
const c=array2.concat(array)
console.log(c);
const s=c.slice(3);
console.log(s);
