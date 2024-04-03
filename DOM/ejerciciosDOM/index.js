//1. Capturar el H1, mediante un ID, en una variable llamada "titulo".
const titulo = document.getElementById("titulo")
//2. Crean una variable "tituloPrincipal" cuyo valor sea "Frutas" y cambiar el contenido del título por el de esta variable.
const tituloPrincipal = "Frutas"
titulo.innerHTML = tituloPrincipal
//3. Capturar el header y el footer, mediante la misma clase, y cambiarles el color a naranja.
let headerfooter = document.getElementsByClassName("headerfooter");
for (const iterator of headerfooter) {
    iterator.style.backgroundColor = "#F59E0B"
} // for of es para iterar arrays y for in es para iterar objetos.
/*4. Capturar y modificar el p del footer, agregarle tu nombre completo y cohort.*/
const soficopyright = document.getElementById("copyright");
soficopyright.innerHTML += " Sofía Belén Figueredo Heinemann - Cohorte N° 54";
//5. Crear un div dentro del main y agregarle el id "contenedor". Capturar ese div por medio de su id. 
let contenedor = document.getElementById("contenedor")
//6. Crear una función que devuelva la estructura de una card. La función debe devolver un string para más adelante utilizar innerHTML. (La card debe contener los siguientes datos: nombre, foto y descripción).
function card_creator(frutas) {
    return `
    <article class="card border-solid border-2 rounded-lg w-52 flex flex-col items-center p-5">
    <img src="${frutas.foto}" class="w-20 h-16">
    <h2 class="font-bold">${frutas.nombre}</h2>
    <p>${frutas.descripcion}</p>
    </article>
    `
}
console.log(frutas[0])
//7. Con el archivo data que se encuentra en la carpeta, realizar un bucle para crear cards con los datos de las frutas, utilizando la función del punto 6. (Este bucle podría meterse en otra función y recibir el array por parámetro).
function renderizar_cards(array, container){
    container.innerHTML = array.map(card_creator)
}
//8. Mostrar las cards con los datos pedidos en el div "#contenedor".
renderizar_cards(frutas, contenedor)
//9. Crear otro div dentro del main, agregarle el id "lista" y capturarlo mediante ese id. Agregar al div el título "Frutas Dulces".
let lista_contenedor = document.getElementById("lista_contenedor")
const titulolistacontenedor = "FRUTAS DULCES"
lista_contenedor.innerText = titulolistacontenedor
//10. Crear una función que reciba un array y devuelva una lista desordenada utilizando nodos (createElement). Cada elemento de la lista será el nombre de una fruta. Para esta lista usar las frutas cuya propiedad "esDulce" sea true.
function addlist(array, container) {
    let lista = document.createElement("ul")
    for (const iterator of array) {
        lista.innerHTML += `<li> 
        <h3>${iterator.nombre}</h3>
        </li>`
    }
    container.appendChild(lista)
}
//11. Mostrar la lista de frutas dulces en el div "#lista".
addlist(frutas, lista_contenedor)
//TIP: cuando busques elementos por ID recuerda que es mejor usar "getElementById". En cambio cuando sea por clase o etiqueta es mejor que uses "querySelector" o "querySelectorAll". 
