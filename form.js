const form = document.forms.formulario
const inputs = form.querySelectorAll('input')

const porcentaje = new Map()
porcentaje.set('estudiante', 80)
porcentaje.set('trainee', 50)
porcentaje.set('junior', 15)

function borrar(){
    inputs.forEach(i => i.value = '')
}
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
   
    const card = CardInfo(total)
    mostrarInfoCard(card) 
}
//Funciones para la card info
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

// Validaciones de formularios
validarCampo = (cadena) => {
    const nameAccepted = /([a-z]+|[A-Z]+[a-z])/
    return nameAccepted.test(cadena)
}