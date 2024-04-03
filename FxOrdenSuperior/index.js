alert("Hello Higher order functions Exercises")
/* 1. Convert the following named function to an arrow function:
           function printMessage( message ) {
                    console.log( message ) 
           } */
let printMessage = (message)=>console.log(message)
/* 2. Convert the following named function to an arrow function:
            function createMultplication (number1, number2) {
                      let result = number1 * number2
                      return result
             }
 */
let createMultplication = (number1, number2) => {
    let result = number1 * number2
    return result
}
////
let createMultplication2 = (number11, number22) => number11 * number22
/* 3. Starting from an array: const array = [ 1,2,3,4,5,6,7,8,9 ], apply a map to that array and pass as an argument the named function shown in the previous exercise. Show by console the new array obtained.*/
let array = [1,2,3,4,5,6,7,8,9]
console.log(array)
let resultado = array.map(function(createMultplication){
    return createMultplication * 2})
console.log(resultado)
/* 4. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 most alcoholic beers. */
console.log(beers)
let mostAlcoholicBeers = beers.filter(elemento=>elemento.abv>7.3)
console.log(mostAlcoholicBeers)
/* 5. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 least bitter beers. */
let leastbitterAlcoholicBeers = beers.filter(elemento=>elemento.ibu<42)
console.log(leastbitterAlcoholicBeers)
/* 6. Generate a function that receives as parameters an array of beers and a name of a beer. The function should return the complete object that matches the name entered. */
function showNameBeer (beers, name) {
    return beers.find(beer=>beer.name.toLowerCase() === name.toLowerCase());
}
console.log(showNameBeer(beers, "Electric India"))
/* 7. Generate a function that receives as a parameter an array of beers, a value and that returns the first object whose ibu property is equal to the entered value, in case there is no beer with that ibu that displays a message in the console that says “ There is no beer with an ibu of (value entered).” */
function showvaluebeer (beers, value) {
    const foundBeer = beers.find(beer => beer.ibu === value);
    if (foundBeer){
        return foundBeer;
    } else {
        console.log(`There is no beer with an ibu of ${value}`);
        return null;
    }
}
const searchedIBU = 70;
const foundBeer = showvaluebeer(beers, searchedIBU);

if (foundBeer) {
    console.log("Found Beer:", foundBeer);
}
/* 8. Generate a function that receives the name of a beer as a parameter and returns the position in the array of that beer. If the beer is not found, a message must be printed through the console saying “(Name of the beer entered) does not exist.” */
function findpositionbeer (beers, name) {
    const foundBeer = beers.find(beer => beer.name.toLowerCase() === name.toLowerCase());
    if (foundBeer) {
        return beers.indexOf(foundBeer);
    } else {
        console.log(`(Name of the beer entered) does not exist.`);
        return -1;
    }
}
console.log(findpositionbeer(beers, "Buzz"))
/* 9. Generate a function that receives as a parameter the array of beers and an alcohol value. The function must return a new array with the beers that do not exceed the alcohol level. Each element of the new array must be an object that has the properties name, alcohol (abv) and "bitterness" (ibu) */
let newbeerobject = {}
function youCanDrive (beers, value) {
    return beers.reduce((filteredBeers, beer)=> {
        if (beer.abv <= value) {
            filteredBeers.push({
            name: beer.name,
            alcohol: beer.abv,
            bitterness: beer.ibu});
        }
        return filteredBeers;
}, []);
}
console.log(youCanDrive(beers, 5))
/* 10. Generate a function that receivefunctions as parameters an array of beers, a property name and a boolean value. It should return a new array with 10 beers ordered by the property entered as the second argument, ascending if the third is true or descending if it is false. */
function orderedBeers(array, property, value){
    const compareFunction = (a, b) => {
        if (a[property] > b[property]) {
            return value? 1 : -1;
        } else if (a[property] < b[property]) {
            return value? -1 : 1;
        } else {
            return 0;
        };
    }
const sortedBeers = beers.slice().sort(compareFunction);
return sortedBeers.slice(0, 10);
}
const orderedBeersAsc = orderedBeers(beers, "abv", true);
console.log("Beers ordered by Abv in ascending order:", orderedBeersAsc);
const orderedBeersDesc = orderedBeers(beers, "abv", false);
console.log("Beers ordered by Abv in descending order:", orderedBeersDesc);
/* 11. Generate a function that receives as a parameter an array of beers and an id of an HTML element where the table will be printed. The function must render (render, draw, paint, fill, etc.) in an html file a table that contains the columns "Name", "ABV", "IBU", and one row for each element of the array. Each row must have the data requested for each of the beers. */
function printedTable (beer) {
    return `<table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Abv</th>
                <th>Ibu</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                // <td>${beer.name}</td>
                <td>${beer.abv}</td>
                <td>${beer.ibu}</td>
            </tr>
        </tbody>
    </table>`
}
console.log(printedTable(beers[0]))
function renderTable (array, container) {
    let container_table = document.getElementById("container_table")
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    headerRow.innerHTML = "<th>Name</th><th>ABV</th><th>IBU</th>";
    array.forEach(element => {
        const row = table.insertRow();
        row.innerHTML = `<td>${element.name}</td><td>${element.abv}</td><td>${element.ibu}</td>`;
    });
    container_table.appendChild(table);
}
renderTable(beers, container_table)