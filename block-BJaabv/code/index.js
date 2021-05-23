// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(puppy, conversion) {
     puppy = +prompt(`Enter your puppy's age`);
    return `Your dog's age is ${puppy * 7}`
}

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age, movieWeek) {
  age = +prompt(`Enter your age`);
  movieWeek = +prompt(`Number of movies you watch a week`);
  let movieMonth = movieWeek * 4;
  let movieYear = movieMonth * 12;
  let constAge = 100;
  return `The total number of movies you will watch in you life is ${movieYear * (constAge - age)}`
}

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(temp) {
  temp = +prompt(`Enter temperature in Celcius`);
  return  `Temperature in fahrenheit is ${(temp*9)/5 + 32}`;
}

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function fahrenheitToCelsius(temp) {
  temp = +prompt(`Enter temperature in Fahrenheit`);
  return  `Temperature in Celsius is ${((temp - 32)*5)/9}`;

}
/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(x, n) {
  x = +prompt(`Enter a number`);
  n = +prompt(`Enter power`);
  if(n < 0){
    return `The number below 1 is not allowed`;
  }else {
    return x ** n;
  }
}

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(n, sumOrProd) {
  n = +prompt(`Enter a number`);
  sumOrProd = prompt(`sum or product`);
  let result = 0;
 if(sumOrProd !== "sum" && sumOrProd !== "product"){
   return `Not a valid input`;
 }else {
   switch(sumOrProd) {
     case "sum":
      for(let i = 1; i <= n; i++){
        result += i;
      }
        break;
      case "product":
      for(let i = 1; i <= n; i++){
        result *= i;   
      }
   }
 }
 return result;
}

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(n) {
  n = +prompt(`Enter a number`);
  for(let i = 1; i <= n; i++){
    result += i;
  }
  return result;
}

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

function sumOfMultiples(n){
  n = +prompt(`Enter a number`);
  let result = 0;
  for(let i = 5; i <= n;i++){
    while(i % 5 === 0 || i % 7 === 0){
      result += i;
      i++
    }
  }
  return result;
}

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(a, b) {
  a = +prompt(`Enter a number`);
  b = +prompt(`Enter another number`);
 if(a > b){
   return `${b} is minimum`;
 }else {
  return `${a} is minimum`;
 }
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(type) {
  type = prompt(`Enter a value`);
  return typeof type;
}
