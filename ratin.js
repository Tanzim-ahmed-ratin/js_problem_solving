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

// function findSmallestNum(arr) {
//     return Math.min(...arr);
//   }
//   console.log(findSmallestNum([3, 5, 1, 9]));
//   console.log(findSmallestNum([-1, -5, 0, 10]));


// Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.

// function countVowels(str) {
//     let vowels = 'aeiouAEIOU';
//     let count = 0;
  
//     for (let char of str) {
//       if (vowels.includes(char)) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   console.log(countVowels("hello world"));
//   console.log(countVowels("Javascript"));

// Write a function to get the first element of an array. The function should take a single argument, which is the array.

// function getFirstElement(arr) {
//     return arr[0];
//   }
  
//   console.log(getFirstElement([10, 20, 30]));
//   console.log(getFirstElement(["x", "y", "z"]));

// Write a function to check if an array is empty. The function should take a single argument, which is the array.

// function isArrayEmpty(arr) {
//     return arr.length === 0;
//   }
  
//   console.log(isArrayEmpty([]));
//   console.log(isArrayEmpty([1, 2, 3]))

// Write a function to return the factorial of a number. The function should take a single argument, which is the number.

// function factorialize(num) {
//     if (num === 0 || num === 1) return 1;
//     return num * factorialize(num - 1);
//   }
  
//   console.log(factorialize(5));
//   console.log(factorialize(7));

// Write a function to reverse a string. The function should take a single argument, which is the string to reverse.

// function reverseString(str) {
//     return str.split('').reverse().join('');
//   }
  
//   console.log(reverseString("hablu"));
//   console.log(reverseString("gablu"));

// Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.

// function toLowerCase(str) {
//     return str.toLowerCase();
//   }
  
//   console.log(toLowerCase("hablu programer")); // "hello world"
//   console.log(toLowerCase("tanzim"));

// Write a function to find the length of a string. The function should take a single argument, which is the string.

// function stringLength(str) {
//   return str.length;
// }

// console.log(stringLength("hello"));
// console.log(stringLength("world"));

//  Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.

// function mergeArrays(arr1, arr2) {
//   return arr1.concat(arr2);
// }

// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
// console.log(mergeArrays(["a", "b"], ["c", "d"]));

// Write a function to get the last element of an array. The function should take a single argument, which is the array.

function getLastElement(arr) {
  return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3]));
console.log(getLastElement(["a", "b", "c"]));