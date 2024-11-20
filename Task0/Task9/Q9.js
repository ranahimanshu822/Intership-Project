//Q1Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?
// function scopeExample() {
//     if (true) {
//         var varVariable = "I am declared with var";
//         let letVariable = "I am declared with let";
//         const constVariable = "I am declared with const";
//         console.log("Inside block:");
//         console.log(varVariable); 
//         console.log(letVariable); 
//         console.log(constVariable);
//     }
    
//     console.log("Outside block:");
//     console.log(varVariable);}
//     scopeExample();

    //Q2Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.

//     const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// function getSecondFruit(array) {
//     if (array.length < 2) {
//         return "The array does not have a second element.";
//     }
//     return array[1];
// }
// console.log(getSecondFruit(fruits));

//Q3Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.

// function modifyArray(array, newElement) {
//     array.push(newElement);
//     console.log("After push:", array);
//     array.pop();
//     console.log("After pop:", array);
//     return array;
// }
// const myArray = [1, 2, 3];
// const result = modifyArray(myArray, 4);
// console.log("Modified array:", result);

//Q4Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

// const numbers = [1, 2, 3, 4, 5];
// function squareNumbers(array) {
//     return array.map(number => number ** 2); 
// }
// const squaredNumbers = squareNumbers(numbers);
// console.log("Original array:", numbers);
// console.log("Squared array:", squaredNumbers); 

//Q5Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers
// function getOddNumbers(array) {
//     return array.filter(number => number % 2 !== 0); 
// }
// const numbers = [12, 7, 8, 3, 11, 4, 19, 20];
// const oddNumbers = getOddNumbers(numbers);
// console.log("Original array:", numbers);
// console.log("Odd numbers:", oddNumbers);

//Q6Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.

// const person = {
//     name: "Alice",
//     age: 30,
//     occupation: "Software Developer"
// };
// function greetPerson(person) {
//     console.log(`Hello, my name is ${person.name}. I am ${person.age} years old and I work as a ${person.occupation}.`);
// }
// greetPerson(person);

//Q7Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).

// function calculateArea(rectangle) {
//     if (rectangle.width <= 0 || rectangle.height <= 0) {
//         return "Width and height must be positive numbers.";
//     }
//     return rectangle.width * rectangle.height;
// }
// const rectangle = { width: 10, height: 5 };
// const area = calculateArea(rectangle);
// console.log("Area of the rectangle:", area);

//Q8Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().

// function getObjectKeys(obj) {
//     return Object.keys(obj);
// }
// const exampleObject = { name: "Alice", age: 30, occupation: "Developer" };
// const keys = getObjectKeys(exampleObject);
// console.log("Keys:", keys);

//Q9Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.

// function mergeObjects(obj1, obj2) {
//     return Object.assign({}, obj1, obj2);
// }
// const object1 = { name: "Alice", age: 30 };
// const object2 = { occupation: "Developer", location: "New York" };

// const mergedObject = mergeObjects(object1, object2);
// console.log("Merged Object:", mergedObject);

//Q10Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.

// const numbers = [1, 2, 3, 4, 5];
// function calculateSum(array) {
//     return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// }
// const sum = calculateSum(numbers);
// console.log("Sum of all numbers:", sum);
