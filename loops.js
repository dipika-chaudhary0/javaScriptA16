// const personName = "John Doe"

// // if (personName === "John") {
// //     console.log("Hi John!")
// // } else if (personName === "John Doe") {
// //     console.log("Hi John Doe!");
// // }
// // else {
// //     console.log("Invalid user!");
// // }
// switch(personName) {
//     case "John":
//         console.log("Hi John!");
//         break;
//     case "John Doe":
//         console.log("Hi John Doe!");
//         break;
//     default:
//         console.log("Invalid user!");
//         break;
// }



//for=>loop when you know how many times to run

// for(let i=0; i<5; i++){
//     console.log(i);
// }

// for(let j=5; j>=0; j--){
//     console.log(j)
// }

// while => LOOP UNTIL A condition becomes false

// let i=0;
// while (i<10){
//     console.log(i);
//     i++;
// }

// do while =>run at least once before checking the condition

// 



// for...in=> loop through object(properties)

const obj={a:1, b:2};
for(let key in obj){
    console.log(key, obj[key]);
}

//for...of=> loop through iterable values(arrays, strings, etc..)

const arr=[10,20,30];
for(let val of arr){
    console.log(val);
}