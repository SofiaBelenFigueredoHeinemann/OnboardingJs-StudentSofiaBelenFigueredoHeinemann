alert("Welcome to the Loops Js games");

/* Difficulty Level: Low*/

/*1- Using a "for" loop, create a program that allows the entry of a number between 1 and 100 through a prompt. Then it prints through the console all the numbers that are between the entered number and 0 (that is, in descending order ).
Let's assume that the number entered is 5. This would be the result:
5
4
3
2
1
0 
*/

// OPCION 1 
let userNumber = prompt("Please, enter a number between 1 and 100:");
let number = parseInt(userNumber);
if (number >= 1 && number <= 100) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
} else {
    console.log("Invalid input. Please, enter a number between 1 and 100.");
}

// OPCION 2: CON DO WHILE QUE ME MOSTRO AGUS (EDMUNDO)
let numberAgus
do {
    numberAgus = prompt ("Enter a number between 1 and 100:")
} while (numberAgus < 100 && numberAgus < 1)
for (let i = numberAgus; i >= 0; i--) {
    console.log(i);
}

/* 2- Using a "for" loop, make a program that allows the entry of a number through a prompt between 1 and 10, and displays through the console it multiplication table (the first 10 multiples only).
Suppose the number entered is 5. This would be the result:
1x5=5
2x5=10
3x5=15
4x5=20
5x5=25
6x5=30
7x5=35
8x5=40
9x5=45
10x5=50*/

// OPCION 1 
let userNumber2 = prompt("Please, enter a number between 1 and 10:");
let number2 = parseInt(userNumber2);
if (number2 >= 1 && number <= 10) {
    for (let i = 1; i <= 10; i++) {
        let result = i * number2; 
        console.log(i + "x" + number2 + "=" + result);
    }
} else {
    console.log("Invalid input. Please, enter a number between 1 and 10.");
}


// Pude aplicar en este ejercicio el DO WHILE
let numberSofi
do {
    numberSofi = prompt ("Please, enter a number between 1 and 10:")
} while (numberSofi > 10 && numberSofi < 1)
for (let i = 1; i <= 10; i++) {
    let result = i * numberSofi;
    console.log(i + "x" + numberSofi + "=" + result);
}


/* 3- Using a "while" loop, create a program that allows the entry of numbers through a prompt. The numbers must be added (acumulated) into a resulting variable. The entry of numbers will end when the user enters a 0. At the end, display the value of the sum variable through console.
Suppose you entered 1 then 3 then 0. This would be the result: 4. 
Tip! Be careful, remember that the promt returns a string. */

let addition = 0;
while (true) {
    let userNumber3 = prompt("Please, enter the numbers that you wish to add (enter 0 to finish the addition):");
    let number3 = parseInt(userNumber3)
    if (number3 === 0 || isNaN(number3)) {
        break
    }
    addition += number3;
}
console.log("The sum of the numbers entered is:", addition);

/* This program continuously prompts the user to enter a number. It converts the input to a number using parseInt(). If the user enters 0, or if the input is not a valid number (NaN), the loop breaks, and the final sum is printed to the console using console.log(). */

/* 4- Using now a "do while" loop and following the same instructions as the previous exercise, display in the console, the value of the variable that accumulates the sum of the numbers entered.

Suppose you entered 1 then 3 then 0. This would be the result: 4

Tip! use backticks for this. */

let addition2 = 0;
do {
    let userNumber4 = prompt("Please, enter the numbers that you wish to add (enter 0 to finish the addition):");
    let number4 = parseInt(userNumber4)
    if (number4 === 0 || isNaN(number4)) {
        break
    }
    addition2 += number4;
}
while (true)
console.log("The sum of the numbers entered is:", addition2);

/* 5- Using a "for in" loop, create an object with at least 5 properties, make a program that cycles through said object and only shows all the keys of its properties in the console.
In the console it should look like this:
- name
- lastName
- origin
- studies 
*/

let person = {
    name: "Robert",
    lastName: "De Niro",
    origin: "E.E.U.U.",
    studies: "Various",
    age: 50}
for (let character in person){
    console.log(character)
}

/* 6- ​​​​​​​Using a "for in" loop, create a program that runs through the object created in previous exercise and only displays the values of each of the keys in the console. */
for (let character in person){
    console.log(person[character])
}

/*Difficulty Level: Medium*/

/* 1- Using the loop that you consider, we are going to use the variable that stored the sum of the numbers in exercise #3 as a "secret number". The new program will allow numbers to be entered through a prompt until the number entered is equal to the one saved in the variable of exercise #3.
If the value entered is greater than the "secret" number, notify the user through the console ("the number entered is greater than the secret"), the same if the value is less.
So on until the user guesses the secret number. Finally, show a congratulatory message on the screen and tell you how many attempts you have made ("You got it right! The secret number was <number> and you made <x> attempts"*/

let secretNumber = addition
//let newSecretNumber = Math.round(secretNumber)
let attempts = 0
while (true) {
    let userNumber5 = parseInt (prompt ("Please, enter a number:"))
    attempts ++
    if (userNumber5 === secretNumber) {
        console.log ("You got it right! The secret number was " + secretNumber + " and you made " + attempts + " attempts");
        break       
    }   else if (userNumber5 > secretNumber){
        console.log ("The number entered is greater than the secret.")
    }
        else {
        console.log ("The number entered is less than the secret.")
    }
}

/* 2-Using the loop that you consider as correct, create a program that receives a number through a prompt and displays all its divisors (dividers) through the console.
Tip: DIVISORS/DIVIDERS: are all natural numbers that exactly divide another natural number. Example: “The divisors of '15' are: 1, 3, 5 and 15. (The division of '15' between any of these numbers is exact)
Suppose 50 was entered. This would be the result 50, 25, 10, 5, 2, 1
Tip! remember or investigate the operator % */

let number6 = parseInt(prompt("Please, enter a number:"))
if (!isNaN(number6) && number6 > 0) {
    console.log("The divisors of " + number6 + " are:");
    for (let i = 0; i < number6; i++){
    if (number6 %i ==0){
        console.log(i)
    }
}
} else {
    console.log("Please enter a valid positive number.")
}

/* 3- Taking into account the ringing Bell function, create a loop (the one you consider) that displays a string through the console that in turn concatenates the string that the function returns as many times as the number that the user enters on the keyboard.
For example, if the user enters the number 5, the result should be:
Ding Dong, Ding Dong, Ding Dong, Ding Dong, Ding Dong

function RingBell() {

     console.log("Ding Dong");

     return "Ding Dong,"
}
    */

function ringBell() {
    console.log("Ding Dong");
    return "Ding Dong,"
}

function ringBellMultiplication() {
    let times = parseInt(prompt("Please, enter the times you wish to ring bell:"))
    if (!isNaN(times) && times > 0) {
        let result= "";
        for (let i = 0; i<times; i++){
            result+= ringBell() }
            console.log(result)
    } else {
    console.log ("Please, enter a valid number:")}
}
ringBellMultiplication()

/* 4 - Starting from the constants dateLimit and dates, make a loop (the one you consider) that shows in the console the dates in the array that are greater than or equal to the date stored in the constant dateLimite.

const dateLimit = "1997-8-3"
const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"] */

const dateLimit = "1997-8-3"
const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]
for (let i=0; i < dates.length; i++){
    if (dateLimit < dates[i]){
        console.log(dates[i])
    }
}

/* 5- Using a "for of" loop, create an array of strings with colors and print each of the colors included in the array through the console.
In the console it should look like this (for example):
Red
Green
Blue
Violet
Brown
Black
White*/
let colors = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "White"]
for (let i=0; i<colors.length; i++){
    console.log(colors[i])
}

/*
6- Now take the loop from the previous exercise as a reference and place it inside a function so that it performs the same task but can be reused as many times as necessary without having to rewrite the loop code.  */
function showColors(array){
    for (let i=0; i<colors.length; i++){
        console.log(colors[i])
    }
}
showColors(colors)

/* 
7- Using a "for of" loop, create an array with 5 numbers and make a program that runs through that array and displays the double of each of the elements, in the console.
In the console it should look like this:
the number is 5 and its double is 10
the number is 7 and its double is 14
the number is 1 and its double is 2
the number is 3 and its double is 6
the number is 50 and its double is 100 */

let arrayNumbers = [2,4,6,8,10,12]
for (let i=0; i < arrayNumbers.length; i++){
    console.log("the number is " + arrayNumbers[i] + " and its double is " + arrayNumbers[i]*2)
}

/* 
8- Using the loop that you think is correct, create an array with at least 4 objects with 4 properties, each of those created objects must represent a member of a family group (they can be fictitious people).
- Then make a program (by saying program the intention is that it is not just the loop, but rather a function that contains the loop) that displays a presentation message for each element of the array through the console.
- In the console it should look like the example:
Hello, I am María Lopez (mother) and I am 40 years old.
Hello, I am Juan Perez (father) and I am 38 years old.
Hello, I am Romina Perez (daughter) and I am 13 years old.
Hello, I am Tomás Perez (son) and I am 10 years old.

Object Model
{name: 'Juan', last-name: 'Perez', age: 38, member: 'father'}
Tip! use backticks for this. */

let familyLopez = [{
    name: "Pablo",
    lastName: "Lopez",
    age: 38,
    familymember: "father"
}, {
    name: "Monica",
    lastName: "Lopez",
    age: 40,
    familymember: "mother"
}, {
    name: "Agustin",
    lastName: "Lopez",
    age: 10,
    familymember: "son"
}, {
    name: "Helena",
    lastName: "Lopez",
    age: 5,
    familymember: "daugther"
}]

function showMembersFamily(array){
    for (let i=0; i< familyLopez.length; i++){
        console.log(`Hello, I am ${familyLopez[i].name} ${familyLopez[i].lastName} (${familyLopez[i].familymember}) and I am ${familyLopez[i].age} years old.`) 
    }
}
showMembersFamily(familyLopez)

/* Difficulty Level: High */
 
/* 
1- Using the loop that you consider, create a program that allows the entry of numbers on the screen through a prompt and calculates the sum of the even numbers on the one hand and the odd numbers on the other.
The data entry ends when the user enters a 0. 
In the console it should look like this (for example):
Even number: 38
Odd numbers 30 */
let evenNumber = 0
let oddNumber = 0
while (true){
    let enterNumber = parseInt(prompt("Please, enter the numbers that you wish (enter 0 to finish):"));
    if (enterNumber %2 == 1){
        oddNumber += enterNumber
    } else if (enterNumber %2 == 0){
        evenNumber += enterNumber
    } else if (enterNumber === 0 || isNaN(enterNumber)){
        break
    }
}   
    console.log("Even number: " + evenNumber);
    console.log("Odd number: " + oddNumber)

/* 
2- Using the loop that you think is correct, create an array of 10 numbers and make a program that prints the largest number in the array, on the screen.
 */
let arrayHighLevel = [1,2,3,4,5,6,7,8,9,10]
let largestNumber = arrayHighLevel[0]
for (let i=0; i < arrayHighLevel.length; i++){
    if (arrayHighLevel[i] > largestNumber){
        largestNumber = arrayHighLevel[i]
    }
}
console.log(largestNumber)