const input = document.querySelectorAll('#floatingInput')
const cantidad = document.querySelector('#inputCantidad')
const inputTotal = document.querySelector('#disabledTextInput')

const porcentaje = new Map()
porcentaje.set('estudiante', 80)
porcentaje.set('trainee', 50)
porcentaje.set('junior', 15)

function comprar() {
    let select = document.querySelector('#select').value
    let cantPrecio = cantidad.value * 200

    let total =  cantPrecio - ( cantPrecio * porcentaje.get(select))/100
    inputTotal.value = parseInt(total)
}

function borrar(){
    input.forEach(i => i.value = '')
}