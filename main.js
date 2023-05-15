function comprarTicket(){
    console.log("comprando ticket")

    const header = document.querySelector("header")

    const template = templateTicket.content.cloneNode(true)
    const div = template.querySelector("div")
    // const span = document.createElement("span");
    div.innerHTML = "Seleccion de tickets"

    list.appendChild(template)
}