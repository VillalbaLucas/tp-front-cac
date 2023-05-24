const homeInterfaz = document.querySelector('#homeInterfaz')
//Elementos de la pagina principal
const header = document.querySelector("header")
const main = document.querySelector('main')
const footerSection= document.querySelector('#footerForm')
const mainChildren = Array.from(main.children)
const arrayElements = [header, main.childNodes[1], main.childNodes[3], footerSection]

//funciones para intercambiar las vistas
ticketInterfaz.addEventListener('click', interfazTicket);
homeInterfaz.addEventListener('click', mostrarHome);
const vistaForm = Form() 

function interfazTicket() {
    removeHome();
    main.appendChild(vistaForm)
}

function mostrarHome(){
    if (!header.style.display == 'block') 
        return

    arrayElements.forEach(elements => elements.style.display = 'block')
    main.removeChild(vistaForm)
}

function removeHome() {
    arrayElements.forEach( element => element.style.display = 'none')
}
interfazTicket()