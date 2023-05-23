const input = form.querySelectorAll('#floatingInput')
const cantidad = document.querySelector('#inputCantidad')
const inputTotal = document.querySelector('#disabledTextInput')

const porcentaje = new Map()
porcentaje.set('estudiante', 80)
porcentaje.set('trainee', 50)
porcentaje.set('junior', 15)

function comprar() {

    if(cantidad.value <= 0 || isNaN(cantidad.value)) return alert('Ingrese una cantidad valida')

    let select = document.querySelector('#select').value
    let cantPrecio = cantidad.value * 200

    let total =  cantPrecio - ( cantPrecio * porcentaje.get(select))/100
    inputTotal.value = parseInt(total)
   
    const card = createInfoCard(total)
    mostrarInfoCard(card) 
}

function borrar(){
    input.forEach(i => i.value = '')
}

const mostrarInfoCard = (card) => {
    const section = templateMain.querySelector('section').style
    section.opacity = '0.5'
    section.pointerEvents = 'none' 
    templateMain.appendChild(card)
}

const createInfoCard = (monto) => {
    const card = document.createElement('div')

    let date = new Date
    let hora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + 'hs'
    let fecha = date.getDate() + '/' + (Number(date.getMonth()) + 1) + '/' + date.getFullYear()

    card.id = 'cardInfo'
    card.innerHTML = `
        <h5 class="pb-4 border-bottom " >Informacion de la compra</h5>
        <p>Monto total a pagar: $${monto}</p>
        <p>Nombre: ${input[0].value}</p>
        <p>Apellido: ${input[1].value}</p>
        <p>Email: ${input[2].value}</p>
        <p>Fecha de compra: ${fecha}</p>
        <p>Hora de compra: ${hora}</p>
        <button class="btn btn-success" onClick="removeCard(cardInfo)" >Aceptar</button>
    `

    card.classList.add('card-info')
    return card
}

const removeCard = (card) => {
    const section = templateMain.querySelector('section')
    section.style.opacity = ''
    section.style.pointerEvents = 'auto'
    templateMain.removeChild(card)
    borrar()
}