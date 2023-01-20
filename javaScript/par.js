const numero1 = parseInt(prompt("ingrese un numero entero"));
const numero2 = parseInt(prompt("ingrese un numero entero"));
const numero3 = parseInt(prompt("ingrese un numero entero"));

if(numero1 > 0 && numero2 > 0 && numero3 > 0){
    let suma = numero1 + numero2 + numero3
    if(suma % 2 == 0){
        console.log("el valor ingresado es par" + suma)
    }else{
        console.log("el valor ingresado es impar")
    }
}else {
    alert("el numero tiene que ser positivo")
}
