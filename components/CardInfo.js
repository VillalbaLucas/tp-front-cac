const CardInfo = (monto) => {
    const card = document.createElement('div')

    let date = new Date
    let hora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + 'hs'
    let fecha = date.getDate() + '/' + (Number(date.getMonth()) + 1) + '/' + date.getFullYear()

    card.id = 'cardInfo'
    card.innerHTML = `
        <h5 class="pb-4 border-bottom " >Informacion de la compra</h5>
        <p>Monto total a pagar: $${monto}</p>
        <p>Nombre: ${inputs[0].value}</p>
        <p>Apellido: ${inputs[1].value}</p>
        <p>Email: ${inputs[2].value}</p>
        <p>Fecha de compra: ${fecha}</p>
        <p>Hora de compra: ${hora}</p>
        <button class="btn btn-success" onClick="removeCard(cardInfo)" >Aceptar</button>
    `

    card.classList.add('card-info')
    return card
}