alert("Welcome to the Javascript games");

/*Difficulty Level: 

1- Create a variable called myName and store your first name in it:
In your JavaScript file create a variable called myName with your name as the value. 
Put your name inside string quotes, e.g., "Rose". Then add a line of code to print the variable name to the console after the previous message. Save your JavaScript file in your editor. Reload the HTML page in your browser. You should see your name printed. If not, investigate and fix (do this step for the next exercises too)

2- Create a variable called myLastName and store your last name in it.

3- Create a variable called myAge and save your age in it. Tip! Do not use string quotes for numbers.

4- Create a variable called myPet and save the name of your pet in it. If you don't have a pet, you can invent a name.

5- Create a variable called petAge and save the pet's age in it. (As in the previous case, you can invent this number if you don't have a pet).

6- Create a variable called fullName and store the concatenation of myFirstName and myLastName in it.

7- Create a variable called presentationText and save in it a text comprised of all the variables created so far.*/

const myName = "Sofia Belen"
console.log(myName)

const myLastName = "Figueredo Heinemann"
console.log(myLastName)

let myAge = 29
console.log(myAge)

const myPet = "Gaston"
console.log(myPet)

let petAge = 10
console.log(petAge)

let fullName = myName + " " + myLastName
console.log(fullName)

let presentationText = "Mi nombre es " + myName + " " + myLastName + ", tengo " + myAge + " años de edad, mi mascota favorita se llama " + myPet + " y tiene " + petAge + " años de edad."
console.log(presentationText)

/*Difficulty Level: Medium

1- Create a variable sumAges, subtractAges, productAges, divisionAges and calculate their respective operations with the variables myAge and agePet.

2- Create an object called student with a minimum of 5 properties, display said object using console.table( ) and also display each of the object's properties separately through the console.

3- Create an object called pet with a minimum of 5 properties, display said object using console.table( ) and also display each of the object's properties separately through the console.

4- Create an array called fruits with a minimum of 5 elements and display the entire array in the console and also display each of the elements separately in the console.*/

let sumAges = myAge + petAge
console.log(sumAges)

let subtractAges = myAge - petAge
console.log(subtractAges)

let productAges = myAge * petAge
console.log(productAges)

let divisionAges = myAge / petAge
console.log(divisionAges)

let student = {
    name: myName,
    lastName: myLastName,
    age: myAge,
    pet: myPet,
    petAge: petAge,
}
console.table (student)
console.log (student.name)
console.log (student.lastName)
console.log (student.age)
console.log (student.pet)
console.log (student.petAge)

let pet = {
    name: myPet,
    age: petAge,
    breed: "poodle",
    color: "white",
    gender: "male",
}
console.table (pet)
console.log (pet.name)
console.log (pet.age)
console.log (pet.breed)
console.log (pet.color)
console.log (pet.gender)

let fruits = [ "orange", "pineaplee", "banana", "lime", "aplee"]
console.log (fruits)
console.log (fruits[0])
console.log (fruits[1])
console.log (fruits[2])
console.log (fruits[3])
console.log (fruits[4])

/*Difficulty Level: High

1- Use a prompt ( ) that allows the entry of an age on the screen and compare it with the number 18, once this is done, save the result in a variable called IamAdult and display a message in the console that says:
"I am an adult" (and the value of the variable).*/

let edad = prompt ("Ingrese su edad")
if (edad >= 18) {
    let IamAdult = console.log ("I am an adult " + edad)
    console.log (IamAdult)
}

//o

//let edad = prompt("Ingrese su edad")
//let numEntero = parseInt (edad)
// console.log(typeof(numEntero))
//if(numEntero >= 18){
//    let iAmAdult = numEntero
//    console.log("Soy Adulto " + iAmAdult)
//}else{
//    console.log("Rechazado por ser menor")
//}

/*2- Create an array called "numbers" with a minimum of 5 elements and display the entire array and each of the elements separately in the console.*/

let numbers = [1, 2, 3, 4, 5]
console.log (numbers)
console.log (numbers[0])
console.log (numbers[1])
console.log (numbers[2])
console.log (numbers[3])
console.log (numbers[4])

/*3- Create an array called "family" with a minimum of 5 objects and display the entire array and each of the elements separately in the console.*/

let family = [
    {nameMother: "Florencia",
    nameFather: "Adrian",
    nameSister: "Milagros",
    nameBrother: "Bart",
    nameGrandmother: "Ana"},

    {lastNameMother: "Heinemann",
    lastNameFather: "Figueredo",
    lastNameSister: "Figuedo Heinemann",
    lastNameBrother: "Heinemann",
    lastnameGrandmother: "Piñas"},

    {ageMother: 53,
    ageFather: 51,
    ageSister: 26,
    ageBrother: 21,
    ageGrandmother: 80},

    {hobbieMother: "sing",
    hobbieFather: "act",
    hobbieSister: "travel",
    hobbieBrother: "dance",
    hobbieGrandmother: "eat"},

    {favouriteColorMother: "blue",
    favouriteColorFather: "red",
    favouriteColorSister: "yellow",
    favouriteColorBrother: "black",
    favouriteColorGrandmother: "green",}
]

console.log (family)
console.log (family[0])
console.log (family[1])
console.log (family[2])
console.log (family[3])
console.log (family[4])

/* 4- Create a variable called "randomText" forming a phrase with the second element of the fruits array, the fourth element at numbers array and the first property of the fifth object of the family array.*/

let randomText = "My favourite fruit is " + fruits[1] + ", my favourite number is " + numbers[3] + " and my favourite color is " + family[4].favouriteColorMother + "."
console.log (randomText)