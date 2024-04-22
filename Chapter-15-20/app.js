// // QUESTION 01)Declare and initialize an empty multidimensional array.

// let emptyArray = [[],[],[]];

// // QUESTION 02)Declare and initialize a multidimensional array representing the following matrix:

// let multiDimentionalArray = [[0,1,2,3,],[1,0,1,2],[2,1,0,1]];
// for(let i=0;  i<multiDimentionalArray.length; i++){
//     document.write(`<h1>${multiDimentionalArray[i].join(' ')}<h1/>`)
// };

// QUESTION 03)Write a program to print numeric counting from 1 to 10.

// let numericCounting = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0;  i<=numericCounting.length; i++){
//     document.write(`${i}<br/>`)
// };

// QUESTION 04)Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

let table = +prompt("Enter a number to show its multiplication table",2);
let tableLength = +prompt("Enter length multiplication table",15);
document.write(`<h3>Multiplication Table of ${table} length ${tableLength}<h3/>`)
for(let i=1; i<=tableLength; i++){
    document.write(`${table} X ${i} = ${table*i} <br/>`)
};




















