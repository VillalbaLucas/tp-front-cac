const ticketInterfaz = document.querySelector('#ticketInterfaz')
const homeInterfaz = document.querySelector('#homeInterfaz')

const header = document.querySelector("header")
const main = document.querySelector('main')
const footer = document.querySelector('#footerForm')

ticketInterfaz.addEventListener('click', mostrarInterfaz);
homeInterfaz.addEventListener('click', mostrarHome);

const headerClases = header.className
const footerClases = footer.className

function mostrarInterfaz() {
    removeHeader();
    console.log("comprando ticket");

    // const template = templateTicket.content.cloneNode(true)
    // const div = template.querySelector("div")
    // // const span = document.createElement("span");
    // div.innerHTML = "Seleccion de tickets"

    // list.appendChild(template)
}


function mostrarHome(){
    if (!header.className == 'header-hidden' && !main.style == 'none') 
        return
    
    header.className = headerClases
    main.style.display = 'block'
    footer.className = footerClases
}

function removeHeader() {
    header.className = 'hidden'
    main.style.display = 'none'
    footer.className = 'hidden'
}
