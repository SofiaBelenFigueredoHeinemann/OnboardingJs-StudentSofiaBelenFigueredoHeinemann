alert("Welcome to the Functions Js games");

/* Difficulty Level: Low

1- Declaring functions
This first exercise is for learning how to declare a function. In this case you must declare a named function called "add" that within its body, must execute an instruction that displays the result of 100 x 20 in the console.*/
function add() {
    console.log(100 * 20)
}
add()

/*2- Calling/executing functions.
We already have the declaration, the next step is to call/execute the "add" function. Execute it and check that the result is displayed in the console.*/
add()

/*3- Adding parameters.
Now it's time to add parameters to our function. Add two parameters and call them whatever you want. Remember to indicate within the body of the function where those parameters will go.*/
function add(number1, number2) {
    console.log(number1 * number2)
}
/*4- Using arguments.
We have already added parameters to the declaration of our function, the next step is to "pass it arguments". To do this,  create two variables like the following in the example:
let number1 = 100;
let number2 = 20;*/
add(100, 20)

/*5- Adding the <return>.
With our named function set up correctly, it's time to change the console.log of the function body. Create a result variable inside the function body that will store the result of 100 x 20, and have the function returns that variable.*/
function add(number1, number2) {
    return (number1 * number2)
}
/*6- Convert the named function from the previous exercise into an anonymous function and call/execute it.*/
let add_ = (number1, number2) => number1 + number2
console.log(add_(5, 5))

/*Difficulty Level: Medium

1- Create a named function called "greet" that
receives a string parameter representing a name, and
displays a custom greeting using the provided name in the console.
Call/run the function with your own name to verify that it works correctly.*/

function greet(name) {
    console.log("Welcome to the jungle " + name)
}
greet("Milagros");

/*2- Create an anonymous function that receives two numerical parameters and
returns the result of the multiplication of both.
Calls/executes the function with two different values and displays the result via console.*/
const multiplication = (number1, number2) => number1 * number2
console.log(multiplication(2, 3))
console.log(multiplication(5, 6))

/*3-Create a named function called "area" that
receives two numerical parameters, one representing the base and the other the height of a triangle.
return its area.*/
function area(base, altura) {
    return base * altura
}
console.log(area(3, 2))

/*4-Create another named function called "perimeter" that
receives three numerical parameters that represent each of the sides of a triangle, and
returns the perimeter of the triangle.
Tip! Remember the formulas for area and perimeter of triangles.*/
function perimeter(height, width, weight) {
    return height + width + weight
}
console.log(perimeter(3, 2, 2))

/*5-Create an function that takes two numerical parameters representing the price and quantity of a product,
and returns the total price of the purchase.
If the number of products is greater than or equal to 10, ==> a 10% discount applies to the total price.
If the number of products is greater than or equal to 20, ==> a 20% discount applies to the total price.
Call/run the function with different price and quantity values to verify it works correctly.*/
function total(price, quantity) {
    let valueproduct = (price * quantity)
    if (quantity >= 10 && quantity < 20) {
        valueproduct *= 0.9
    } else if (quantity >= 20) {
        valueproduct *= 0.8
    }
    return (valueproduct)
}
console.log(total(5, 5))

/*6- Create a named function called isAnAdult that
receives a numeric parameter representing the age of a person, and
returns a message indicating whether the person is an Adult or not.
If Age is greater than or equal to 18 "You are an adult"
If Age is less than 18 "You are not an adult"
Call the function with different age values to verify that it works correctly.
Call the function with different age values to verify that it works correctly.*/
function isAnAdult(age) {
    if (age >= 18) {
        console.log("You are an adult")
    } else {
        console.log("You are not an adult")
    }
}
console.log(isAnAdult(10))

/*Difficulty Level: High

1- Create a function (declare it as you want) that:
- takes a numerical parameter that represents a person's annual income, and 
returns the tax they must pay.
- If Income less than or equal to $10,000, ==> tax of 10% of income.
- If Income greater than $10,000 and less than or equal to $20,000, ==> tax of 15% of income.
- If Income greater than $20,000, ==> tax of 20% of income.
Use nested conditionals to implement this function.
Call/execute the function with different input values to verify that it works correctly.*/
function calculatetax(income) {
    if (income <= 10000) {
        console.log("The annual tax you must pay is " + (income *= 0.1))
    }
    else if (income > 10000 && income <= 20000) {
        console.log("The annual tax you must pay is " + (income *= 0.15))
    }
    else if (income > 20000) {
        console.log("The annual tax you must pay is " + (income *= 0.2))
    }
}
console.log(calculatetax(20000))

/*2- Create a function (declare it as you want) to check for a day that
receives a numerical parameter and
returns a message indicating whether it is a business day or not.
- If the number is 1, 2, 3, 4, 5, message: "It is a business day."
- If the number is 6 or 7, message: "It's the weekend."
Use the nested switch control structure to implement this function.
Call the function with different day values to verify that it works correctly.*/
let dayoftheweek = prompt("Choose a day of the week (1 to 7)")
switch (dayoftheweek) {
    case "1":
        console.log("It is a business day (monday).")
        break
    case "2":
        console.log("It is a business day (tuesday).")
        break
    case "3":
        console.log("It is a business day (wednesday).")
        break
    case "4":
        console.log("It is a business day (thursday).")
        break
    case "5":
        console.log("It is a business day (friday).")
        break
    case "6":
        console.log("It's the weekend (saturday).")
        break
    case "7":
        console.log("It's the weekend (sunday).")
        break
    default:
        console.log("Invalid date")
}


/*3- Create a program using a function (declare it as you want) that takes a parameter that represents Personal Information (enter by keyboard). 
- First the Name must be entered, and
if it comes empty ==> the program must stop and display a console.error with a message “The name cannot be empty”
- Then the user must be asked to enter the Last Name and it must be validated as the Name in previous step.
- Finally, the user must be asked to enter the age and it must be validated too.
- Once all the data were verified, the function must save all that data in an object with 3 properties: first name, last name and age and display it through the console.
- To finish, the function must be called/executed and tested with different values.*/


function personalInformation() {
    let personalinfo = {}

    let firstName = prompt("Please, enter your First Name: ");
    if (!firstName) {
        console.error("The First Name cannot be empty.");
        return;
    }
    let lastName = prompt("Please, enter your Last Name: ");
    if (!lastName) {
        console.error("The Last Name cannot be empty.");
        return;
    }
    let age = prompt("Please, enter your age: ");
    if (isNaN(age) || age < 0) {
        console.error("Please enter a valid age.");
        return;
    }
    personalinfo.firstName = firstName;
    personalinfo.lastName = lastName;
    personalinfo.age = parseInt(age);
    console.log(personalinfo)
}
console.log(personalInformation())

/*4- Create a program that is made up of 3 functions (declare them as you want):
1st greet function: that takes a parameter that represents a name and returns a string “Hello, my name is [ parameter ]”
2nd function: calculateAge: which takes two parameters that represent the year of birth and the current year. This function will return the result of the current year minus the year of birth.
3rd function: present: call/execute the other two functions and execute an alert with the user's presentation
The user's data must be entered on the screen and the final result also displayed on the screen.*/
function greet (name){
    return "Hello, my name is " + name
}
function calculateAge(yearBirth, currentYear)  {
    return currentYear - yearBirth
}
function executeProgram (){
    greet("DAVID")
    calculateAge(1990,2024)
    alert (greet("DAVID") + " my age is " + calculateAge(1990,2024))
}
executeProgram()