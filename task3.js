const num=25;
if(num%3==0){
    console.log("Fizz");
}
else if(num%5==0){
    console.log("Buzz");
}
else if(num%3==0 &&num%5==0){
    console.log("FizzBuzz");
}
else{
    console.log("INvalid");
}

let day = 10;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("There is no day ");
}