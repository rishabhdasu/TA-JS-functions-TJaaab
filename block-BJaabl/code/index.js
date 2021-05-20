/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
function sayHello(name){
  alert(`Hello ${name}`);
}
sayHello("Rishabh");
/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/
function getFullName(firstName, lastName){
  return firstName + lastName;
}
getFullName("Rishabh", "Dasgupta");

/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/

function addTwoNumbers(firstNum, secondNum){
  return firstNum + secondNum;
}

addTwoNumbers(3, 5);

/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/
function calc(numA, numB, operation){
  
 if(typeof numA !== "number" || typeof numB !== "NaN"){
   alert(`Enter a valid input`);
 }else {
  if(operation == "add"){
    return numA + numB;
  }else if(operation == "sub"){
   return numA -numB;
  }else if(operation == "mul"){
    return numA * numB;
  }else if(operation == "div"){
    return numA / numB;
  }
 }
}

calc(2, 5, "add");

/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/
function isLeapYear(year){
  if((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)){
    return true;
  }else {
    return false;
  }
}

/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/

function getFactorial(numb){
  let fact = 1;
  for(let i = 1; i <= numb; i++){
    fact *= i;
  }
  return fact;
}
