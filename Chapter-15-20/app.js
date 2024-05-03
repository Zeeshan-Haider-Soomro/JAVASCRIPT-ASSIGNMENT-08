// // QUESTION 01)Declare and initialize an empty multidimensional array.

let emptyArray = [[],[],[]];

// // QUESTION 02)Declare and initialize a multidimensional array representing the following matrix:

let multiDimentionalArray = [[0,1,2,3,],[1,0,1,2],[2,1,0,1]];
for(let i=0;  i<multiDimentionalArray.length; i++){
    document.write(`<h1>${multiDimentionalArray[i].join(' ')}<h1/>`)
};

// QUESTION 03)Write a program to print numeric counting from 1 to 10.

let numericCounting = [1,2,3,4,5,6,7,8,9,10];
for(let i=0;  i<=numericCounting.length; i++){
    document.write(`${i}<br/>`)
};

// QUESTION 04)Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

let table = +prompt("Enter a number to show its multiplication table",2);
let tableLength = +prompt("Enter length multiplication table",15);
document.write(`<h3>Multiplication Table of ${table} length ${tableLength}<h3/>`)
for(let i=1; i<=tableLength; i++){
    document.write(`${table} X ${i} = ${table*i} <br/>`)
};

// QUESTION 05)Write a program to print items of the following array using for loop:

let fruits = ["apple","banana","mango","orange","strawberry"];

for(let i=0; i<=fruits.length; i++){
    document.write(`${fruits[i]}<br/>`)
};
document.write(`<br/>`)
for(let j=0; j<=fruits.length; j++){
    document.write(`Element at index ${j} is ${fruits[j]}<br/>`)
}
document.write("<br/>");
for(let j = 0;j<fruits.length;j++) {
    document.write(`Element at index ${j} is ${fruits[j]}<br>`);
};

// QUESTION 06)Generate the following series in your browser. See example output.

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

document.write(`<h2>Counting<h2/>`)
let counting = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
document.write(counting)

// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

counting.reverse()
document.write(`<br/><h2>Reverse Counting<h2/>`)
for(let i=5; i<=14; i++){
    document.write(`${counting[i]},`)
};

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

document.write(`<br/><h2>Even: <h2/>`);
for(let i=0; i<=20; i++){
    if(i%2 == 0){
        document.write(`${i},`)
    }
};

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

document.write(`<br/><h2>Odd: <h2/>`);

for(let j=0; j<=20; j++){
    if(j%2 == 1){
        document.write(`${j},`)
    }
};

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


document.write(`<br/><h2>Series: <h2/>`);
for(let i=2; i<=20; i++){
    if(i%2 == 0){
        document.write(`${i}k,`)
    }
};

// QUESTION 07 You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is found in the list or not. Example:

let bakkeryItems = ["cake","apple pie","cookie","chips","patties"];

let askCustomer = prompt("welcome to abc bakkey.what do you want to order sir/ma'am?");

if(bakkeryItems.includes(askCustomer)){
    document.write(`${askCustomer} is available at index ${bakkeryItems.indexOf(askCustomer)} in our bakkey`);
}
else{
    document.write(`we are sorry.${askCustomer} is not available in our bakkery.`)
};

//QUESTION 08) Write a program to identify the largest number in the given array.

let numbers = [24, 53, 78, 91, 12];
document.write(`<h1>Array items: 24, 53, 78, 91, 12<h1/>The largest number is: ${numbers[3]}`)
// another way
let numberArray = [24,53,78,91,12];

document.write("<h2>Array items</h2>");

let largestNum = Math.max(...numberArray);

document.write(`<h2>The Largest number is : ${largestNum}</h2>`);

// QUESTION 09)Write a program to identify the smallest number in the given array.

let numbers = [24, 53, 78, 91, 12];
document.write(`<h1>Array items: 24, 53, 78, 91, 12<h1/>The largest number is: ${numbers[4]}`)
// another way

let numbersArray = [24,53,78,91,12];

document.write("<h2>Array items</h2>");

let smallestNum = Math.min(...numbersArray);

document.write(`<h2>The Smallest number is : ${smallestNum}</h2>`);

// QUESTION 10)Write a program to print multiples of 5 ranging 1 to 100.

for(i=0; i<=100; i++){
    if(i%5 == 0){
        document.write(`${i},`)
    }
}



























