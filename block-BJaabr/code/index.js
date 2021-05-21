// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value


Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).
*/

/*
Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(aNumber){
  return 1 + aNumber;
}
// - Write a Function Expression
let addNumb = function addOne(aNumber){
  return 1 + aNumber;
}
// - Write an Arrow Function without curly brackets(if possible)

let addNumb = (aNumber) => aNumber +1;

// - Write an Arrow Function with curly brackets

let addNumb = (aNumber) => {
  return 1 + aNumber;
}

// - Execute the function

addNumb(3);

4

// - Execute the function and store the return value in a variable.

let result = addNumb(3);

undefined

// - What is the typeof returnValue

typeof result;

"number"

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(aNumber){
  return aNumber - 1;
}
// - Write a Function Expression

let substractOne = function addOne(aNumber){
  return aNumber - 1;
}

// - Write an Arrow Function without curly brackets(if possible)

let subNumb = (aNumber) => Anumber -1;

// - Write an Arrow Function with curly brackets

let subNumb = (aNumber) => {
  return aNumber - 1;
}

// - Execute the function

subNumb(4);

3

// - Execute the function and store the return value in a variable.

let result =subNumb(3);

undefined


// - What is the typeof returnValue

typeof result;

"number"

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

function sum(numA, numB){
  return numA + numB;
}

// - Write a Function Expression

let sum1 = function sum(numA, numB){
  return numA + numB;
}


// - Write an Arrow Function without curly brackets(if possible)

let sum1 = (numA, numB) => numA + numB;

// - Write an Arrow Function with curly brackets

let sum1 = (numA, numB) => {
  return numA + numB;
}

// - Execute the function

sum(3, 5);

8

// - Execute the function and store the return value in a variable

let output = sum(3, 5);

undefined

// - What is the typeof returnValue

typeof output; 

"number"

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

function square(numSquare){
  return numSquare * numSquare;
}

// - Write a Function Expression

let squareOfNumb = function square(numSquare){
  return numSquare * numSquare;
}
// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets

let squareOfNumb =  (numSquare) => {
  return numSquare * numSquare;
} 

// - Execute the function

squareOfNumb(4);
16

// - Execute the function and store the return value in a variable

let result = squareOfNumb(4);

undefined

// - What is the typeof returnValue

typeof result
"number"

/* 5. Find isGreater

// Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

// Do the following with above problem.

// - Write a Function Declaration

*/

function isGreater(x, y){
  if(x > y){
    return true;
  } else {
    return false;
  }
}

// - Write a Function Expression
let greater = function isGreater(x, y){
  if(x > y){
    return true;
  } else {
    return false;
  }
}

// - Write an Arrow Function without curly brackets(if possible)


// - Write an Arrow Function with curly brackets

let greater =  (x, y) =>{
  if(x > y){
    return true;
  } else {
    return false;
  }
}


// - Execute the function

greater(4, 5);

false

// - Execute the function and store the return value in a variable

let result = greater(4, 5);

undefined

// - What is the typeof returnValue

typeof result

"boolean"

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

function oddOrEven(oddEven){
  if(oddEven % 2 === 0){
    return "Number is even";
  } else {
    return "Number is odd";
  }
}

// - Write an anonymous Function Expression

let oddOrEven = function (oddEven){
  if(oddEven % 2 === 0){
    return "Number is even";
  } else {
    return "Number is odd";
  }
}

// - Write an named Function Expression

let oddEvenVar = function oddOrEven(oddEven){
  if(oddEven % 2 == 0){
    return "Number is even";
  } else {
    return "Number is odd";
  }
}

// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven =  (oddEven) => oddEven % 2 == 0 ? "Number is even":"Number is odd";

// - Write an Arrow Function with curly brackets

let oddEvenVar =  (oddEven) => {
  if(oddEven % 2 === 0){
    return "Number is even";
  } else {
    return "Number is odd";
  }
}

// - Execute the function

oddOrEven(5);

"Number is odd"

// - Execute the function and store the return value in a variable

let result = oddEvenVar(5);

undefined

// - What is the typeof returnValue

typeof result

"string"