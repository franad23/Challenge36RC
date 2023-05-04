class Contacts {  // Creamos la clase contactos, En este caso no utilizo CONSTRUCTOR ya que vi que no hacia falta 
    aniadirContacto(contactsArr) {
        contactsArr.forEach(element => {
            const $div = document.createElement('div');
            $div.classList.add("divItem");
            $div.innerHTML = `Nombre: ${element.name}, Numero: ${element.number}`
            $contactsContainer.appendChild($div);
        });
    }
    eliminarContacto(contactsArr, nameToDel) {
        this.aniadirContacto(contactsArr.filter((e) => e.name.toString().toLowerCase() != nameToDel))
        console.log(contactsArr);
        if (!contactsArr.some(e => e.name.toString().toLowerCase() == nameToDel)) {
            alert(`El contacto ${nameToDel} NO esta en la agenda y por lo tanto no se puede eliminar!`)
        }
    }
    existeContacto(contactsArr, nameToCheck) {
        if (contactsArr.some(e => e.name.toString().toLowerCase() == nameToCheck)) {
            alert(`El contacto ${nameToCheck}, esta en la agenda!`)

        }else {
            alert(`El contacto ${nameToCheck}, NO esta en la agenda!`)
        }
    }
    huecosLibres(contactsArr, cantidadContactos) {
        if (contactsArr.length == cantidadContactos) {
            alert("No quedan mas lugares disponibles en tu Agenda!")
        }else {
            alert(`Quedan disponiles ${cantidadContactos - contactsArr.length} lugares!`)
        }
    }
    buscarContacto(contactsArr, contactToFind) {
        let ContactFound = contactsArr.find(e => e.name == contactToFind);
        console.log(ContactFound);
        if (!contactsArr.some(e => e.name.toString().toLowerCase() == contactToFind)) {
            alert(`El contacto ${contactToFind} NO esta en la agenda`);
        }else {
            alert(`El contacto ${ContactFound.name} esta en la agenda y su numero es ${ContactFound.number}`);
        }
    }
    agendaLlena(contactsArr, cantidadContactos) {
        if (contactsArr == cantidadContactos) {
            alert(`La Agenda esta llena!`);
        }else {
            alert(`Todavia quedan ${cantidadContactos - contactsArr.length}`)
        }
    }
}

