// Mini Proyecto: Cajero Automático

// Crea una aplicación web con JavaScript donde simulemos la interacción con un cajero automático.
 
// Al ingresar al cajero, puedes seleccionar la cuenta con la que deseas interactuar. Deben existir al menos tres cuentas. Para esto, puedes trabajar con un arreglo de objetos como el siguiente:


var cuentas = [
  { nombre: "Hiromi", saldo: 200, password: 'helloworld' },
  { nombre: "Luis", saldo: 290, password: 'l33t' },
  { nombre: "Carlos", saldo: 67, password: '123' }
];
// Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es correcto, debes mostrar las siguientes opciones:
// Consultar saldo
// Ingresar monto
// Retirar monto

function login (){
    let user = document.getElementById('usuario').value;
    if (selected = cuentas.find(e => e.nombre === user)) {
        checkpass(selected)
        } else {
        document.getElementById('loginError').innerText = 'El usuario no existe, intentalo de nuevo'
        document.getElementById('usuario').value = ''
        document.getElementById('contrasena').value = ''
    }
}

function checkpass (selected) {
    let pass = document.getElementById('contrasena').value
    if (pass === selected.password) {
        menu(selected)
    } else {
        document.getElementById('loginError').innerText = 'Contraseña incorrecta, intentalo de nuevo'
        document.getElementById('usuario').value = ''
        document.getElementById('contrasena').value = ''
    }
} 

function menu(selected) {  
    document.getElementById('inicio').style.display = 'none'
    document.getElementById('menu').style.display = 'block';
    document.getElementById('current').innerText = selected.nombre;


    document.getElementById('balance').addEventListener('click', function () {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('currentbalance').style.display = 'block';
        document.getElementById('userbalance').innerText = '$' + selected.saldo;
    })
        document.getElementById('back').addEventListener('click', function(){
            document.getElementById('menu').style.display = 'block';
            document.getElementById('currentbalance').style.display = 'none';
        });


    document.getElementById('deposit').addEventListener('click', function () {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('depositar').style.display = 'block';
    })
        document.getElementById('makeDeposit').addEventListener('click', function() {
            let depositoo = document.getElementById('amount').value
            if ( Number(depositoo) + selected.saldo <= 990) {
                let newbalance = Number(depositoo) + selected.saldo
                selected.saldo = newbalance
                document.getElementById('updated').innerText = 'Tu nuevo saldo es de: ' + '$' + newbalance
                document.getElementById('depositError').innerText = 'Depositado!'
                document.getElementById('amount').value = ''
            } else {
                document.getElementById('depositError').innerText = 'Lo sentimos, no puedes tener un saldo mayor a $990'
                document.getElementById('updated').innerText = ''
            }})
        document.getElementById('back2').addEventListener('click', function(){
            document.getElementById('menu').style.display = 'block';
            document.getElementById('depositar').style.display = 'none';
            document.getElementById('depositError').innerText = '';
            document.getElementById('amount').value = ''
        });



    document.getElementById('withdraw').addEventListener('click', function () {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('retirar').style.display = 'block';
    })
        
        document.getElementById('hacerRetiro').addEventListener('click', function(){
            let retiro = document.getElementById('amount2').value
            if (selected.saldo - Number(retiro) > 10){
                let newbalance = selected.saldo - Number(retiro)
                selected.saldo = newbalance
                document.getElementById('retiroError').innerText = 'Retirado con éxito!'
                document.getElementById('updated2').innerText = 'Tu nuevo saldo es de: ' + '$' + newbalance
                document.getElementById('amount2').value = ''
            } else {
                document.getElementById('retiroError').innerText = 'Lo sentimos, no puedes tener un saldo menor a $10'
                document.getElementById('updated2').innerText = ''
            }})
            document.getElementById('back3').addEventListener('click', function(){
                document.getElementById('menu').style.display = 'block';
                document.getElementById('retirar').style.display = 'none';
                document.getElementById('retiroError').innerText = ''
                document.getElementById('amount2').value = ''
            })

            document.getElementById('exit').addEventListener('click', function(){
                document.getElementById('inicio').style.display = 'block'
                document.getElementById('menu').style.display = 'none';
                document.getElementById('usuario').value = ''
                document.getElementById('contrasena').value = ''
                document.getElementById('loginError').innerText = ''
            })

}

// Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta
// Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
// Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.
 
// Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10.
// Es necesario hacer las validaciones pertinentes en tu código para que no se rompa esta regla de negocio.

// RETO EXTRA PLUS:
// Si ya posees conocimientos de desarrollo web con html, css y javascript. Haciendo uso del DOM crea una interfaz con html y css que maneje toda la interacción descrita arriba