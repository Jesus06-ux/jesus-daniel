/*Desarrolle un algoritmo que reciba la base y altura de un triangulo en cm. Los 2 valores ingresados no pueden ser iguales, ademas el algoritmo
 debe calcular el area del triangulo si la base es mayor a 5cm y la altura es mayor a 4cm, si no lo son el algoritmo debe imprimir el valor de la
 base multiplicado por 2 y sumarle 10.*/


 const base = parseInt(prompt("ingrese la base del triangulo: "))
 const altura = parseInt(prompt("ingrese la altura del triangulo"))

 if(base != altura){
    if(base > 5 && altura > 4){
        const area = (base*altura)/2
        console.log("el area del triangulo es: "+ area)
    }else{
        const are2 = (base*2)+10
        console.log("el area del triangulo es: "+ are2)
    }
 }