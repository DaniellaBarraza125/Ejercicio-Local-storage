
// EJERCICIO 1 = CREAR FORMULARIO 

// EJERCICIO 2= Crea una función que cuando envíes el formulario muestre por consola los datos de contacto rellenados en un objeto de JS
const Nombre = document.getElementById('name');
console.log(Nombre);
const Correo = document.getElementById('email');
console.log(Correo);

const Mensaje = document.getElementById('text');
// console.log(Mensaje);
let userid = 0;
const btn = document.getElementById('btn');

// console.log(btn);
const p = document.getElementById('savedInfo')
let saveduser = JSON.parse(localStorage.getItem("user"))

function onSubmit(e) {
    e.preventDefault()
    const inputNameValue = Nombre.value
    const inputEmailValue = Correo.value
    const inputTexValue = Mensaje.value
// EJERCICIO 3
    console.log("Ejercicio3=","name:",inputNameValue)
    console.log("email:",inputEmailValue)
    console.log("text:",inputTexValue)
    
// EJERCICIO 4

localStorage.setItem('user'+ userid, JSON.stringify({
    Nombre: inputNameValue,
    Correo: inputEmailValue,
    Mensaje: inputTexValue}
    ))
    userid++;
    saveduser = JSON.parse(localStorage.getItem("user0"));
    // MOSTRAR EN HTML
    p.innerHTML = `Nombre: ${saveduser.Nombre} Correo: ${saveduser.Correo} Mensaje ${saveduser.Mensaje}`
}
btn.addEventListener('click',onSubmit)

// p.innerHTML = `Nombre: ${saveduser.Nombre}Correo: ${saveduser.Correo} Mensaje ${saveduser.Mensaje}` ;

const creset = document.getElementById('reset');
// console.log(reset);


function reset(e) {
    e.preventDefault()
    localStorage.clear()
    console.log("funciona?");
}

creset.addEventListener("click", reset)
creset.addEventListener("click",function reset() {

})

// atenta al borrar todo- reset user id a 0 o sino sigue creando los consecutivos sin resetear el id
// puedes solucionar con if
// piensa

