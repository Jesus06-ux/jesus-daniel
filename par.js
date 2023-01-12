const numero = parseInt(prompt("ingrese un numero entero"));

if(numero > 0){
    if(numero % 2 == 0){
        console.log("el vaor ingresado es par")
    }else{
        console.log("el valor ingresado es impar")
    }
}else {
    alert("el numero tiene que ser positivo")
}
