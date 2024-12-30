// Create a variable called carName, assign the value Volvo to it.

// let carName = "Volvo";
// console.log(carName);

// On one single line, declare three variables with the following names and values:

// let firstName = "John", lastName = "Doe", age = 35;
//  console.log(firstName);
 
// 1. Use the correct **assignment operator** that will result in `x` being `50` (same as `x = x * y`).

// let x = 10;
// let y = 5;
// let a = x * y;
// console.log(a);

// Use comments to describe the correct data type of the following variables:

// let length = 16; // data type: number
// let lastName = "Johnson"; // data type: string

// const x = {
//   firstName: "John",  
//   lastName: "Doe"
// };    // data type: object

//Execute the function named myFunction.

// function myFunction() {
//     alert("Hello World!");
//   }
//   // Call the function name
//   myFunction();
  
//Create an object called person 

// let person = {
//     name: "John",
//     age: 50
//   };
// alert(person.name + " is " + person.age);

// The <button> element should do something when someone clicks on it. Try to fix it!

// document.getElementById('myButton').addEventListener('click', function() {
//     alert('clickable');
//   });

//  Alert the number of items in an array, using the correct Array property:

// const cars = ["Volvo", "Jeep", "Mercedes"];
// alert(cars.length);


// // Change the first item of Brand to "Ford".

// const Brand = ["Volvo", "Jeep", "Mercedes"];
// Brand[0] = "Ford";
// console.log(Brand);

// Use the correct Math method to create a random number.

// const Math = 5 * 6;
// console.log(Math);

// // Use the correct Math method to return the largest number of 10 and 20.

// let x = Math.max(10, 20);
// console.log(x);

// // Use the correct Math method to get the square root of 9.

// const a = Math.sqrt(9);
// console.log(a);

// Choose the correct comparison operator to alert true, when x is greater than y

// let x = 5;
// let y = 1;

// alert(x > y)

// // the correct conditional 

// let age = 10;
// alert(age < 18 ? "Too young" : "Old enough");

// that is the function to convert Celsius to Fahrenheit

// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
//   }
//   console.log(celsiusToFahrenheit(0));
//   console.log(celsiusToFahrenheit(25));

// Write a function to check if a number is even. The function should take a single argument, which is the number to check.
// function isEven(num) {
//     return num % 4 === 0;
//   }
//   console.log(isEven(2));
//   console.log(isEven(7));

//Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.

function findSmallestNum(arr) {
    return Math.min(...arr);
  }
  console.log(findSmallestNum([3, 5, 1, 9]));
  console.log(findSmallestNum([-1, -5, 0, 10]));
