const ticketInterfaz = document.querySelector('#ticketInterfaz')
const homeInterfaz = document.querySelector('#homeInterfaz')
// vista pagina principal
const header = document.querySelector("header")
const main = document.querySelector('main')
const footer = document.querySelector('#footerForm')
// vista formulario tickets
const mainticket = document.querySelector('#ticketMain')
const template = templateFormTicket.content.cloneNode(true)
const templateMain = template.querySelector('#templateMain')
ticketMain.appendChild(template)  
//funciones para intercambiar las vistas
// ticketInterfaz.addEventListener('click', interfazTicket);
// homeInterfaz.addEventListener('click', mostrarHome);

const headerClases = header.className
const footerClases = footer.className

function interfazTicket() {
    removeHeader();
    console.log("Area main despejada");

    if(!templateMain.className == 'hidden') {
        return
    } 
    templateMain.className = 'block'   
}


function mostrarHome(){
    if (!header.className == 'header-hidden' && !main.style == 'none') 
        return
    templateMain.className = 'hidden'
    header.className = headerClases
    main.style.display = 'block'
    footer.className = footerClases
}

function removeHeader() {
    header.className = 'hidden'
    main.style.display = 'none'
    footer.className = 'hidden'
}
interfazTicket()