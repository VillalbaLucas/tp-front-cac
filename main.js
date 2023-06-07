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
const viewForm = Form() 

function interfazTicket() {
    removeHome();
    main.appendChild(viewForm)
}

function mostrarHome(){
    if (!header.style.display == 'block') 
        return

    arrayElements.forEach(elements => elements.style.display = 'block')
    main.removeChild(viewForm)
}

function removeHome() {
    arrayElements.forEach( element => element.style.display = 'none')
}
// FUNCIONES DEL FORMULARIO
// modificar el precio total
const form = viewForm.querySelector('form')
const inputCant = form.querySelectorAll('input')[3]
const select = form.querySelector('#select')
const total = form.querySelector('#disabledTextInput')

select.addEventListener('click' , () => {
    total.value = calcularCant(inputCant.value)
})
inputCant.addEventListener('mouseleave', (e) => {
    total.value = calcularCant(e.target.value)
})
//funciones para operar los inputs
function comprar(){
    const inputs = form.querySelectorAll('input')
    let name = inputs[0].value,
        lastname = inputs[1].value,
        cantidad = inputs[3].value

    if(!inputs[3].checkValidity() || cantidad <= 0 || !validarCampo(name) || !validarCampo(lastname) ) return alert('Ingrese datos validos')
    
    const card = CardInfo(calcularCant(cantidad), inputs)
    mostrarInfoCard(card) 
}

function calcularCant(cantidad){
    const porcentaje = new Map()
    porcentaje.set('estudiante', 80)
    porcentaje.set('trainee', 50)
    porcentaje.set('junior', 15)
    
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
//Tarjetas de descuentos

const colors = ['bg-primary', 'bg-success', 'bg-warning']
const containDiscounts = document.querySelectorAll('#containDiscounts>div')

console.log(containDiscounts)
for(let card of containDiscounts) {
    card.addEventListener('mouseenter',  (e) => { 
        e.target.classList.add(colors[e.target.dataset.id])
    })
    card.addEventListener('mouseleave', (e) => {
        e.target.classList.remove(colors[e.target.dataset.id])
    })
}