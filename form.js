const form = document.forms.formulario
const inputs = form.querySelectorAll('input')

const porcentaje = new Map()
porcentaje.set('estudiante', 80)
porcentaje.set('trainee', 50)
porcentaje.set('junior', 15)

function comprar(){

    let cantidad = inputs[3].value,
        inputTotal = inputs[4],
        name = inputs[0].value,
        lastname = inputs[1].value

    if(cantidad <= 0 || !validarCampo(name) || !validarCampo(lastname) ) return alert('Ingrese datos validos')

    let select = form.querySelector('#select').value,
        cantPrecio = cantidad * 200,
        total =  cantPrecio - ( cantPrecio * porcentaje.get(select))/100

    inputTotal.value = parseInt(total)
   
    const card = createInfoCard(total)
    mostrarInfoCard(card) 
}
function borrar(){
    inputs.forEach(i => i.value = '')
}
//Funciones para la card info
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

const removeCard = (card) => {
    const section = templateMain.querySelector('section')
    section.style.opacity = ''
    section.style.pointerEvents = 'auto'
    templateMain.removeChild(card)
    borrar()
}

// Validaciones de formularios

validarCampo = (cadena) => {
    const nameAccepted = /([a-z]+|[A-Z]+[a-z])/
    return nameAccepted.test(cadena)
}