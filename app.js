// --------------DECLARACION DE VARIABLES----------------
const $contactForm = document.getElementById('contactForm');
const $enterContactBtn = document.getElementById('enterContactBtn');
const $contactsContainer = document.getElementById('contactsContainer');
const $deleteContact = document.getElementById('deleteContact');
const $existeContacto = document.getElementById('existeContacto');
const $agendaLlena = document.getElementById('agendaLlena');
const $lugaresDisponibles = document.getElementById('lugaresDisponibles');
const $buscarContacto = document.getElementById('buscarContacto');

let currentContact;
let contactsArr = [];
let cantidadContactos = parseInt(prompt("Cuantos contactos deseas añadir a tu agenda? (Maximo 20)"));


// ------------------FUNCIONES-----------------
if (isNaN(cantidadContactos)) {
    cantidadContactos = 10;
}
const enviarFormulario = (e) => { // Aca creamos el submit del formulario que toma todos los datos y los guarda en el array contactsArr.
    e.preventDefault();
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    if (contactsArr.length == cantidadContactos) {
        alert("Agenda llena! Elimina algun contacto por favor!")
    }else {
        contactsArr.push(data);
    }
    console.log(e.target.name.value);
    currentContact = new Contacts(e.target.name.value.toLowerCase(), e.target.number.value.toLowerCase(), contactsArr); // Aca instanciamos a partir de la clase
    $contactsContainer.innerHTML = ''; // Esto lo coloco porque a partir del segundo contacto agregado se va van repitiendo en el html esto es debido a que se crea el div contenedor a partir del array de objetos pero no se borra el anterior, o sea es para que quede en blanco y coloque todos los objetos del array
    currentContact.aniadirContacto(contactsArr) //llamamos al metodo para agregar el contacto
    $contactForm.reset() // para que el form quede limpio aca vez que le damos agregar contacto
}

$contactForm.addEventListener('submit', enviarFormulario); // aca se llama al listener del boton

$deleteContact.addEventListener('click', () => {
    let nameToDel = prompt("Ingresa el nombre de la persona que deseas eliminar").toLowerCase();
    $contactsContainer.innerHTML = '';
    currentContact.eliminarContacto(contactsArr, nameToDel);
    // contactsArr = [];
    contactsArr = contactsArr.filter((e) => e.name.toString().toLowerCase() != nameToDel);
    console.log(contactsArr);
    $contactForm.reset()
})

$existeContacto.addEventListener('click', () => {
    let nameToCheck = prompt("Cual nombre desea verificar si existe?").toLowerCase();
    currentContact.existeContacto(contactsArr, nameToCheck);
})

$lugaresDisponibles.addEventListener('click', () => {
    if (currentContact == undefined) {
        alert(`Quedan ${cantidadContactos} lugares disponibles, todavia no agregaste ningun contacto!`)
    }
    else {
        currentContact.huecosLibres(contactsArr, cantidadContactos);
    }
})

$buscarContacto.addEventListener('click', () => {
    let contactToFind = prompt("Ingresa el nombre del contacto que deseas buscar").toLowerCase();
    console.log(contactToFind);
    currentContact.buscarContacto(contactsArr, contactToFind);
})

$agendaLlena.addEventListener('click', () => {
    currentContact.agendaLlena(contactsArr, cantidadContactos);
})




// const enviarFormulario = (e) => {
//     e.preventDefault();
//     if (document.getElementById('sexoF').checked) {
//         $sexo = "Femenino"
//     }else {
//         $sexo = "Masculino"
//     }
//     const data = Object.fromEntries(
//         new FormData(e.target)
//     )
//     dataPers.push(data);
//     dataPers[0].sexo = $sexo;
//     user = new Persona (dataPers[0].nombre, dataPers[0].edad, dataPers[0].sexo, dataPers[0].peso, dataPers[0].altura, dataPers[0].nacimiento)
//     $formulario.reset()
// }
// $formulario.addEventListener('submit', enviarFormulario);