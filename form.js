const input = document.querySelectorAll('#floatingInput')
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
   
    infoCompra(total)

}

function borrar(){
    input.forEach(i => i.value = '')
}

const  infoCompra = (monto) => {
    const div = document.createElement('div')

    let date = new Date
    let hora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + 'hs'
    let fecha = date.getDate() + '/' + (Number(date.getMonth()) + 1) + '/' + date.getFullYear()

    div.innerHTML = `
        <h5 class="mb-3 py-3 border-bottom ">Informacion de la compra</h5>
        <p>Monto total a pagar: $${monto}</p>
        <p>Nombre: ${input[0].value}</p>
        <p>Apellido: ${input[1].value}</p>
        <p>Email: ${input[2].value}</p>
        <p>Fecha de compra: ${fecha}</p>
        <p>Hora de compra: ${hora}</p>
        <button class="btn btn-success">Aceptar</button>
    `

    div.className='text-center pb-4 border border-1 rounded-3 w-25 position-absolute right-50 top-50 '
    mainticket.appendChild(div)
}