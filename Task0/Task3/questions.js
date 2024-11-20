//Q1..Remove all the names starting with vowels from the list. Use array.filter.
// function removeNamesStartingWithVowels(names) {
//     return names.filter(name => {
       
//         return !/^[aeiouAEIOU]/.test(name);
//     });
// }
// const names = ["Alice", "Eve", "Oscar", "Uma", "Charlie", "Bob"];
// const filteredNames = removeNamesStartingWithVowels(names);

// console.log(filteredNames);

//Q2) let str = 'I love my India'
//output expected = 'India my love I'
//Write code for this.

// let str = 'I love my India';
// let reversedStr = str.split(' ').reverse().join(' ');
// console.log(reversedStr); 



// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice
// let string = 'INDIA';


// let charArray = string.split('');
// charArray.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');
// let modifiedString = charArray.join('');
// console.log(modifiedString);

// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
// function countVowelsAndConsonants(inputString) {
//     let vowels = 'aeiouAEIOU';
//     let consonantCount = 0;
//     let vowelCount = 0;
//     for (let char of inputString) {
//         if (/[a-zA-Z]/.test(char)) { 
//             if (vowels.includes(char)) {
//                 vowelCount++;
//             } else {
//                 consonantCount++;
//             }
//         }
//     }
//     return { vowels: vowelCount, consonants: consonantCount };
// }
// let inputString = "JavaScript is amazing!";
// let result = countVowelsAndConsonants(inputString);

// console.log(`Vowels: ${result.vowels}, Consonants: ${result.consonants}`);


// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.


// function correctfn(sentence, wrong, correct) {
//     return sentence.replace(new RegExp(wrong, 'g'), correct);
// }
// const sentence = "This is a sample sentance with a wrong spelling.";
// const wrong = "sentance";
// const correct = "sentence";
// console.log(correctfn(sentence, wrong, correct));

// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

// function filterGreaterThanFive(inputArr) {
   
//     return inputArr.filter(number => number > 5);
// }
// const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
// const answer = filterGreaterThanFive(inputArr);
// console.log(answer);

// Q7)
// const students = [
// { name: "Ram", scores: [80, 70, 60] },
// { name: "Mohan", scores: [80, 70, 90] },
// { name: "Sai", scores: [60, 70, 80] },
// { name: "Hemang", scores: [90, 90, 80, 80] },
// ];
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
// Use array.map and array.reduce.

// const students = [
//     { name: "Ram", scores: [80, 70, 60] },
//     { name: "Mohan", scores: [80, 70, 90] },
//     { name: "Sai", scores: [60, 70, 80] },
//     { name: "Hemang", scores: [90, 90, 80, 80] },
// ];

// const result = students.map(student => {
//     const totalScore = student.scores.reduce((sum, score) => sum + score, 0);
//     const average = totalScore / student.scores.length; 
//     return { name: student.name, average }; 
// });

// console.log(result);

// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

// function repeatedDigitSum(num) {
//     while (num >= 10) {
//         num = num
//             .toString() 
//             .split('') 
//             .map(Number) 
//             .reduce((sum, digit) => sum + digit, 0); 
//     }
//     return num;
// }
// console.log(repeatedDigitSum(456)); 
// console.log(repeatedDigitSum(987)); 

//Q9) Write a function to count the number of words in a paragraph.

// function countWords(paragraph) {
   
//     const words = paragraph.trim().split(/\s+/);
//     return words.length;
// }
// const paragraph = "This is an example paragraph containing multiple words.";
// console.log(countWords(paragraph)); 


// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH

// function reverseString(input) {
//     return input.split('').reverse().join('');
// }
// const input = "Hello";
// const output = reverseString(input);
// console.log(output);

// Q11)
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]
    
// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.


// const students = {
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37,
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37,
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37,
//     },
// };

// const calculateAverages = (students) => {
//     return Object.entries(students).map(([student, scores]) => {
//         const total = Object.values(scores).reduce((sum, score) => sum + score, 0); 
//         const average = Math.round(total / Object.values(scores).length); 
//         return { [student]: { average } }; 
//     });
// };

// const output = calculateAverages(students);
// console.log(output);
