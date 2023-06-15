// const button = document.querySelector('button');
// button.onclick = function(){
// }
// class numbers{
//     constructor(boton, value){
// this.boton=boton
// this.value = value
//     }
// function asignarValor(){
//     }
//     function multiplicar (){
//  }
// // }
// let num0= 0
// document.getElementById("0").value= '0'
// console.log(0)



// const botonUno = document.getElementById('uno')
// const botonDos = document.getElementById('dos')
// const botonTres = document.getElementById('tres')
// const botonCuatro = document.getElementById('cuatro')
// const botonCinco = document.getElementById('cinco')
// const botonSeis = document.getElementById('seis')
// const botonSiete = document.getElementById('siete')
// const botonOcho = document.getElementById('ocho')
// const botonNueve = document.getElementById('nueve')

// const botonUno = document.getElementById('uno')
// const pantalla = document.getElementById('pantalla')

// botonUno.addEventListener('click', handle)

// function handle(){
// pantalla.innerText= '1'

// }







const botonDos = document.getElementById('dos')


botonDos.addEventListener('click',handleDos )

function handleDos(){
pantalla.innerText= '2'

}

const botonTres = document.getElementById('tres')


botonTres.addEventListener('click',handleTres )

function handleTres(){
pantalla.innerText= '3'

}

const botonCuatro = document.getElementById('cuatro')


botonCuatro.addEventListener('click',handleCuatro )

function handleCuatro(){
pantalla.innerText= '4'

}

const botonCinco = document.getElementById('cinco')


botonCinco.addEventListener('click',handleCinco )

function handleCinco(){
pantalla.innerText= '5'

}


const botonSeis = document.getElementById('seis')


botonSeis.addEventListener('click',handleSeis )

function handleSeis(){
pantalla.innerText= '6'

}
const botonSiete = document.getElementById('siete')


botonSiete.addEventListener('click',handleSiete )

function handleSiete(){
pantalla.innerText= '7'

}

const botonOcho = document.getElementById('ocho')


botonOcho.addEventListener('click',handleOcho )

function handleOcho(){
pantalla.innerText= '8'

}

const botonNueve = document.getElementById('nueve')


botonNueve.addEventListener('click',handleNueve )

function handleNueve(){
pantalla.innerText= '9'

}




// botonSuma.addEventListener('click',sumar)
// function sumar(){
// botonSuma == '+'

// }
const botonSuma = document.getElementById('suma')
botonSuma.addEventListener('click',handleSuma)
function handleSuma(){
pantalla.innerText='+'
}

// almacenar el valor de cada boton numero para usarlos como parametros en la funcion a+b



//    sumar(a,b){
//     return a+b
//    }






const botonResta= document.getElementById('resta')
botonResta.addEventListener('click',handleResta)
function handleResta(){
    pantalla.innerText='-'
}


const botonDivision = document.getElementById('division')
botonDivision.addEventListener('click', handleDivision)
function handleDivision(){
    pantalla.innerText= '%'

}

// aqui falta boton borrar

const botonIgual= document.getElementById('igual')
botonIgual.addEventListener('click',handleIgual)
function handleIgual(){
    pantalla.innerText= '='
}



