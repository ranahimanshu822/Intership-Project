//Q1-- Write code to display from 1 to 100 but just even numbers.


    // for(let i=2;i<=100;i+=2){
    //     console.log(i);
    // }

//2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.


//  function calculator(num1,num2,operator){
//     switch(operator){
//         case'+': return num1+num2;
//         case'-':return num1-num2;
//         case'*':return num1*num2;
//         case'/':
//         if(num2!=0) {return num1/num2;}
//         else{
//             return "ERROR!";
//         }
//         default: return "BHAI TU SCHOOL JA"

//     }
//  }
// let num1=parseFloat(prompt("Enter the number"));
// let num2=parseFloat(prompt("Enter the number"));
// let operator=prompt("Enter the operator +,-,*,/");
// let result=calculator(num1,num2,operator);
// alert("Result :"+result);


// 3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

// function findTax(salary) {
//     let tax;

//     switch (true) {
//         case salary > 0 && salary <= 500000:
//             tax = salary * 0;
//             break;
//         case salary > 500000 && salary <= 1000000:
//             tax = salary * 0.1;
//             break;
//         case salary > 1000000 && salary <= 1500000:
//             tax = salary * 0.2;
//             break;
//         case salary > 1500000:
//             tax = salary * 0.3;
//             break;
//         default:
//             tax = "Invalid salary input";
//     }

//     return tax;
// }

// console.log(findTax(450000)); 
// console.log(findTax(750000));
// console.log(findTax(1250000));
// console.log(findTax(2000000)); 
// console.log(findTax(-500)); 


//4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.



// function sumOfProducts(n1, n2) {
   
//     let str1 = n1.toString();
//     let str2 = n2.toString();
//     str1 = str1.split('').reverse();
//     str2 = str2.split('').reverse();

//     let sum = 0;
//     for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
//         const digit1 = i < str1.length ? parseInt(str1[i]) : 0; 
//         const digit2 = i < str2.length ? parseInt(str2[i]) : 0; 
//         sum += digit1 * digit2;
//     }
//     return sum;
// }