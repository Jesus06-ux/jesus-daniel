//Desarrolle un algortimo que reciba un numero entero y escriba si dicho numero es par o impar.

const numeroentero = parseInt(prompt("ingrese un numero entero"))
if(numeroentero > 0){
    if(numeroentero % 2 == 0){
        console.log("el vaor ingresado es par")
    }else{
        console.log("el valor ingresado es impar")
    }
}else{
    console.log("el valor no es correcto")
}


