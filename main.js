const homeInterfaz = document.querySelector('#homeInterfaz')
//Elementos de la pagina principal
const header = document.querySelector("header")
const main = document.querySelector('main')
const footerSection= document.querySelector('#footerForm')
const mainChildren = Array.from(main.children)
const arrayElements = [header, main.childNodes[1], main.childNodes[3], footerSection]

//funciones para intercambiar las vistas
ticketInterfaz.addEventListener('click', interfazTicket);
homeInterfaz.addEventListener('click', viewHome);
const viewForm = Form() 

function interfazTicket() {
    removeHome();
    main.appendChild(viewForm)
}

function viewHome(){
    if (!header.style.display == 'block') 
        return

    arrayElements.forEach(elements => elements.style.display = 'block')
    main.removeChild(viewForm)
}

function  removeHome(){
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
inputCant.addEventListener('keyup', () => {
    total.value = calcularCant(inputCant.value)
})
form.addEventListener('keyup', () => {
    const inputs = form.querySelectorAll('input')
    if(!validityInputsValues(inputs[0].value, inputs[1].value, inputs[3].value, inputs[3]) && /[a-zA-Z0-9]{6,}(@[a-z]{5,}.com)/.test(inputs[2].value))
        form.querySelector('#btnBuy').disabled = false
    else
        form.querySelector('#btnBuy').disabled = true
})
//funciones para operar los inputs
function buy(){
    const inputs = form.querySelectorAll('input')
    let name = inputs[0].value,
        lastname = inputs[1].value,
        tickets = inputs[3].value

    if(validityInputsValues(name, lastname, tickets, inputs[3])) return alert('Ingrese datos validos')
    
    const card = CardInfo(calcularCant(tickets), inputs)
    viewInfoCard(card)
    form.querySelector('#btnBuy').disabled = true
}

function calcularCant(tickets){
    const porcentage = new Map()
    porcentage.set('estudiante', 80)
    porcentage.set('trainee', 50)
    porcentage.set('junior', 15)
    
    let select = document.querySelector('#select').value,
    quantityPrice = tickets * 200,
    total =  quantityPrice - ( quantityPrice * porcentage.get(select))/100;
    return parseInt(total)
}
function emptyInputs(){
    const inputs = form.querySelectorAll('input')       
    inputs.forEach(i => i.value = '')
    form.querySelector('#btnBuy').disabled = true
}
//Funciones para la interfa de la card info
const viewInfoCard = (card) => {
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
    emptyInputs()
}
// Validaciones de formularios de nombres
validarCampo = (input) => {
    const nameAccepted = /([a-z]{4,}|[A-Z]+[a-z]{3,})/
    return nameAccepted.test(input)
}
function validityInputsValues(name, lastname, tickets, inputTickets){
    return (!inputTickets.checkValidity() || tickets <= 0 || !validarCampo(name) || !validarCampo(lastname) )
}
//Hover tarjetas de descuentos
const colors = ['bg-primary', 'bg-success', 'bg-warning']
const containDiscounts = viewForm.querySelectorAll('#containDiscounts>div')
for(let card of containDiscounts) {
    card.addEventListener('mouseenter', enter = (e) => { 
        e.target.classList.add(colors[e.target.dataset.id])
    })
    card.addEventListener('mouseleave', leave = (e) => {
        e.target.classList.remove(colors[e.target.dataset.id])
    })
}
