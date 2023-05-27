const porcentaje = new Map()
porcentaje.set('estudiante', 80)
porcentaje.set('trainee', 50)
porcentaje.set('junior', 15)


function comprar(){
    const inputs = document.querySelector('form').querySelectorAll('input')
    let name = inputs[0].value,
        lastname = inputs[1].value
        cantidad = inputs[3].value,
        inputTotal = inputs[4];

    if(!inputs[3].checkValidity() || cantidad <= 0 || !validarCampo(name) || !validarCampo(lastname) ) return alert('Ingrese datos validos')
    
    const card = CardInfo(calcularCant(cantidad), inputs)
    mostrarInfoCard(card) 
}
function calcularCant(cantidad){
    let select = document.querySelector('#select').value,
    cantPrecio = cantidad * 200,
    total =  cantPrecio - ( cantPrecio * porcentaje.get(select))/100;
    return parseInt(total)
}
function borrar(){
    const form = document.querySelector('form')
    const inputs = form.querySelectorAll('input')       
    inputs.forEach(i => i.value = '')
}
//Funciones para la interfa de la card info
const mostrarInfoCard = (card) => {
    const section = formMain.querySelector('section').style
    section.opacity = '0.5'
    section.pointerEvents = 'none' 
    formMain.appendChild(card)
}

const removeCard = (card) => {
    const section = formMain.querySelector('section')
    section.style.opacity = ''
    section.style.pointerEvents = 'auto'
    formMain.removeChild(card)
    borrar()
}

// Validaciones de formularios de nombres
validarCampo = (cadena) => {
    const nameAccepted = /([a-z]+|[A-Z]+[a-z])/
    return nameAccepted.test(cadena)
}
