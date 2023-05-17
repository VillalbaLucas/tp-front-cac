const ticketInterfaz = document.querySelector('#ticketInterfaz')
const homeInterfaz = document.querySelector('#homeInterfaz')

ticketInterfaz.addEventListener('click', mostrarInterfaz);
homeInterfaz.addEventListener('click', mostrarHome);

const header = document.querySelector("header")
const headerClases = header.classList

function mostrarInterfaz() {
    removeHeader();
    console.log("comprando ticket");

    // const template = templateTicket.content.cloneNode(true)
    // const div = template.querySelector("div")
    // // const span = document.createElement("span");
    // div.innerHTML = "Seleccion de tickets"

    // list.appendChild(template)
}


function mostrarHome(headerClases) {
    if (!header.classList == 'header-hidden') {
        return
    }
    alert("Volviendo a la pagina de inicio")
    header.classList.remove('header-hidden')
    console.log(header.classList)
    header.classList.add
    console.log(header.classList)

}

function removeHeader() {
    header.classList.value = 'header-hidden'
}
