alert("Welcome to the Conditionals Js games");

/*Difficulty Level: Low

1- Starting from the following example, create a conditional block that evaluates whether the variable num1 is greater than num2, if so, print the value of num1 via the console, otherwise print num2.
let num1 = 4
let num2 = 5
*/

let num1 = 4
let num2 = 5
if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2)
}

/*
2- Based on exercise 1, now modify the block as follows:

If num1 is greater than num2, print num1 through the console,

if num2 is greater, print num2 and finally

if they are equal, print a string that says “The numbers are equal ”
*/

if (num1 > num2) {
    console.log(num1);
} else if (num2 > num1) {
    console.log(num2);
} else {
    console.log("The numbers are equal");
}

/*
3- Based on exercise 1, create a conditional block that evaluates whether these variables are equal or not, if so, print a string through the console “The numbers are equal”, otherwise “The numbers are different”*/

if (num1 == num2) {
    console.log("The numbers are equal");
} else {
    console.log("The numbers are different")
}

/*
4- Starting from the following example, create a conditional block that evaluates whether one of these variables is greater than the other; if so, display “The date [variable 1] is greater than [variable 2]” by console, and, If they are the same, print “The dates are the same”
Tip! Use backticks to print via console.
let date1 = "2018-9-2"
let date2 = "2023-7-5"
The date 2023-7-5 is greater than the date 2018-9-2
*/

let date1 = "2018-9-2"
let date2 = "2023-7-5"
if (date1 > date2) {
    console.log(`The date ${date1} is greater than the date ${date2}`);
} else if (date2 > date1) {
    console.log(`The date ${date2} is greater than the date ${date1}`);
} else {
    console.log("The dates are the same");
}

/*
5- Now try changing the value of the variables. As in the previous exercises, a string must be printed through the console that says if date 1 is greater than date 2 or the opposite.Tip! Investigate how the strings compare.
*/

let date_1 = "2019-9-2"
let date_2 = "2024-7-5"
if (date_2.localeCompare(date_1)) {
    console.log(`The date ${date_2} is greater than the date ${date_1}`);
} else if (date_1.localeCompare(date_2)) {
    console.log(`The date ${date_1} is greater than the date ${date_2}`);
} else {
    console.log("The dates are the same");
}

/*
6- In this case, create a conditional block that evaluates which of the three numbers stored in the variables is the largest. Print a string through the console that says “The number [ ] is the largest”.
let number1 = 5
let number2 = 7
let number 3 = 9
*/

let number1 = 5;
let number2 = 7;
let number3 = 9;

if (number1 > number2 && number1 > number3) {
    console.log(`The number ${number1} is the largest`);
} else if (number2 > number1 && number2 > number3) {
    console.log(`The number ${number2} is the largest`);
} else {
    console.log(`The number ${number3} is the largest`);
}

/*
Difficulty Level: 

1- Using a "switch", create a program that allows you to enter these color names on the screen: red, blue or green. 
And print on the screen in each case:

red: “The color of passion”

blue: “The color of the sea.”

green: “The color of nature”

Tip! Don't forget the break statement.*/

let color = prompt("Choose a color");
switch (color) {
    case "red":
        console.log("The color of passion");
        break;
    case "blue":
        console.log("The color of the sea");
        break;
    case "green":
        console.log("The color of nature");
        break;
    default:
        console.log("Invalid color");
}

/* 2- Using a switch, create a program that allows you to enter on the screen: 
two numerical values (number from 1 to 100) an operation (addition, subtraction, multiplication, division)
and print on the screen in each case:

sum: first value + the second
subtraction: first value - the second
multiplication: first value * second
division: first value / second

With the corresponding literal ("the sum of <num1> and <num2> is...", etc.)
Tip! Don't forget the break statement.*/

let number_1 = prompt("Enter a number from 1 to 100");
let number_2 = prompt("Enter other number from 1 to 100");
let option = prompt("Choose an operation (addition, subtraction, multiplication, division)");
let sum = parseInt(number_1) + parseInt(number_2);
switch (option) {
    case "addition":
        console.log("The addition of " + number_1 + " + " + number_2 + " is " + sum);
        break;
    case "subtraction":
        console.log(`The subtraction of ${number_1} and ${number_2} is ${number_1 - number_2}`);
        break;
    case "multiplication":
        console.log(`The multiplication of ${number_1} and ${number_2} is ${number_1 * number_2}`);
        break;
    case "division":
        console.log(`The division of ${number_1} and ${number_2} is ${number_1 / number_2}`);
        break;
    default:
        console.log("Invalid option");
}


/*3- Starting from the following structure, create a conditional block that
receives 2 objects representing people with the properties: name, age, height
and print by console in the same console.log:
Which of the two people is the taller?
Which is the oldest?
Tip! You can use nested if or logical operators.

let person = {
       name = Juan,
       age = 39,
       height = 1.69
}
Example Result: "Juan is taller and older than Rosa"*/

let person1 = {
    name: "Robert",
    age: 39,
    height: 1.69,
}

let person2 = {
    name: "Rachael",
    age: 60,
    height: 1.55,
}

if (person1.height > person2.height && person1.age > person2.age) {
    console.log("The person 1 is taller and oldest than the person 2")
}
else if (person1.height > person2.height && person1.age < person2.age) {
    console.log("The person 1 is taller and youngest than the person 2")
}
else if (person1.height < person2.height && person1.age > person2.age) {
    console.log("The person 2 is taller and youngest than the person 1")
}
else {
    console.log("The person 2 is taller and oldestthan the person 1")
}


/*4- Create a program that allows you to enter on the screen:
- your name, age, height and vision.
- and print through the console a string “You are qualified to drive”,
For this the person must:
- Be at least 18 years old.
- Measure more than 110 cm.
- Have a vision of at least 8 out of 10.
Tip! Remember prompt( ) to enter data on the screen.*/

let name = prompt("Enter your name.");
let age = prompt("Enter your age.");
let height = prompt("Enter your height.");
let vision = prompt("Enter your vision level (number from 1 to 10).")

if (age >= 18 && height >= 110 && vision >= 8) {
    console.log("You are qualified to drive")
}
else {
    console.log("You are not qualified to drive")
}

/*5-Create a program that allows you to enter your age on the screen and print it on the screen if you are:
infant (0 to 12 years)
adolescent (13 to 18 years old)
older young (19 to 45 years)
elderly (over 45 years)
Is he really that old? (more than 100 show)
Tip! Remember alert( ) to display data on the screen.*/

let age_ = prompt("Enter your age:")

if (age_ <= 12) {
    console.log("You are infant")
}
else if (age_ > 12 && age_ <= 18) {
    console.log("You are adolescent")
}
else if (age_ > 18 && age_ <= 45) {
    console.log("You are older young")
}
else if (age_ > 45 && age_ <= 100) {
    console.log("You are elderly")
}
else {
    console.log("Is he really that old?")
}

/*6-Create a program that allows you to enter only numbers from 1 to 3 on the screen and then any other numerical data. Print on screen:
1: “The number entered is [ ]”
2: “Twice the number entered is [ ]”
3: “Three times the number entered is [ ]”
another: “That value is not allowed”
Tip! Remember alert( ) to display data on the screen.*/

let number = prompt("Enter a number from 1 to 3");

if (number >= 1 && number <= 3) {
    console.log("The number entered is " + number);
    console.log("Twice the number entered is " + number * 2);
    console.log("Three times the number entered is " + number * 3);
}
else {
    alert("That value is not allowed")
}

/* Difficulty Level: High

1-Create a program that allows the following data to be entered on the screen:

Customer name, Pass (vip or normal), Entrance (yes or no).
People who have your name ==> show a welcome message
or VIP pass ==> show a welcome message
If you have a ticket, ask if you want to use it
If affirmative ==> show a welcome message
If negative ==> show farewell message
And finally in case of not having the same name or VIP pass or entry, ask "do you want to buy?". And in case:
negative ==> show farewell message
affirmative ==> ask for available money, in case:
More than 1000 ==> show a successful sale and welcome message
Less than 1000 ==> show sales rejection message*/

/*1-Crea un programa que permita introducir en pantalla los siguientes datos:

Nombre del cliente, Pase (vip o normal), Entrada (si o no).

Personas que tienen su nombre ==> mostrar un mensaje de bienvenida
o pase VIP ==> mostrar un mensaje de bienvenida

Si tiene entrada, pregunta si desea utilizarla
En caso afirmativo ==> mostrar un mensaje de bienvenida
En caso negativo ==> mostrar mensaje de despedida

Y finalmente en caso de no tener el mismo nombre o pase VIP o entrada, preguntar "¿desea comprar?". Y en caso
negativo ==> mostrar mensaje de despedida
afirmativo ==> preguntar por el dinero disponible, en caso:
Más de 1000 ==> mostrar venta exitosa y mensaje de bienvenida
Menos de 1000 ==> mostrar mensaje de rechazo de venta*/

let customername = prompt("Please, enter your name");
let pass = prompt("Your pass is vip or normal?");
let money = 1001

if (customername == "Sophie" || pass == "vip") {
    console.log (alert("Welcome " + customername))
} else {
    let entrance = prompt("Do you have a entrance? (yes or no)");
    // FALTA UN ELSE ??? PREGUNTAR LUNES 25-3
    if (entrance == "yes") {
        let ticket = prompt("Do you want to use your entrance? (yes or no)");
        if (ticket == "yes") {
            alert("Welcome " + customername)
        }
        else if (ticket == "no") {
            let newticket = prompt("Do you want to buy a entrance? (yes or no)");
            {
                if (newticket == "yes") {
                    let money = prompt("How much money do you have?");
                    if (money > 1000) {
                        alert("Congratulations, you have a entrance. Welcome " + customername)
                    }
                    else {
                        alert("Sorry, you don't have a entrance. Bye Bye...")
                    }
                }
                else {

                    alert("Bye Bye...")
                }

            }

        }

    }

}