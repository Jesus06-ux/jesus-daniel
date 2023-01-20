//Pedir dos números y decir si non múltiplos o no.

console.log("*Multiplos*");
 const numero1 = parseInt(prompt("Ingrese el primer numero"));
 const numero2 = parseInt(prompt("Ingrese el segundo numero"));

 if(numero1 >= 0 && numero2 >= 0){
   const multiplo=numero1%numero2;
      if(multiplo == 0){
        console.log("los Numeros son multiplos");
    } else{
        console.log("Los numeros no son multiplos");
    }
     } else{
    alert("Los numeros no pueden ser negativos");
}