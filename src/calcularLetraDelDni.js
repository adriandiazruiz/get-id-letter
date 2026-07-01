const arrayLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

function obtenerNumeroDelDni (dni){
    let numeroDni = Number(dni.slice(0,-1))
    return (numeroDni) 
}

function obtenerLetraDelDni(dni){
    let letraDni = dni[dni.length-1].toUpperCase()
    return(letraDni)
}

function comprobarSiElNumeroDeDniEsValido (dni){
    let isNumeroDniValido = (obtenerNumeroDelDni(dni) > 0) && (obtenerNumeroDelDni(dni) < 99999999) && (dni.length == 9)
    if (isNumeroDniValido) return(true); return(false)
 } 

function calcularElResto(dni){
    if(comprobarSiElNumeroDeDniEsValido(dni)){let resto = Math.floor(obtenerNumeroDelDni(dni) % 23)
        return(resto)
    } 
}

function compararLetraIntroducidaYCalculada (dni){ 
let letraCalculada = arrayLetras[calcularElResto(dni)]

    if(letraCalculada == obtenerLetraDelDni(dni)){

        return (`Letra introducida: ${obtenerLetraDelDni(dni)}\nLetra calculada: ${letraCalculada}\nLas letras coinciden. El DNI es correcto. `)
    }
    else{
    
      return (`Letra introducida: ${obtenerLetraDelDni(dni)}\nLetra calculada: ${letraCalculada}\nLas letras NO coinciden. Has introducido un DNI incorrecto.`)
    }

}

function mostrarMensajeFinal (dni){
    if (comprobarSiElNumeroDeDniEsValido(dni)) {
        return(`Numero: ${obtenerNumeroDelDni(dni)}\nResto de la división: ${calcularElResto(dni)}\n${compararLetraIntroducidaYCalculada(dni)}`)
    }
    else{
        return( "El número que has introducido no es válido.")
    }
}

const dniUsuario = prompt("Introduce un DNI: ")


console.log(mostrarMensajeFinal(dniUsuario))