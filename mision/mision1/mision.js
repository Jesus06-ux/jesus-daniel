alert("escuela pequeños brocolitos");

let nombre;
let n1, n2, n3, n4, n5, n6, n7, n8, notaPromedio1, notaPromedio2, notapromedio3, notapromedio4, notaFinal;

nombre = prompt("Ingrese el nombre del estudiante");
n1 = parseFloat(prompt("Ingrese la nota del primer examen "));
n2 = parseFloat(prompt("Ingrese la nota del segundo examen "));
n3 = parseFloat(prompt("Ingrese la nota del tercer examen "));
n4 = parseFloat(prompt("Ingrese la nota del primer trabajo "));
n5 = parseFloat(prompt("Ingrese la nota del segundo trabajo "));
n6 = parseFloat(prompt("Ingrese la nota del examen final "));
n7 = parseFloat(prompt("Ingrese la nota de autoevaluacion "));
n8 = parseFloat(prompt("Ingrese la nota de co-evalucion "));




if(n1 < 0 || n1 > 5 || n2 < 0 || n2 > 5 || n3 < 0 || n3 > 5 || n4 < 0 || n4 > 5 || n5 < 0 || n5 > 5 || n6 < 0 ||n6 > 5 || n7 < 0 || n7 > 5){
    alert("los numeros estan fuera del rango");
}else{
    notaPromedio1 = (n1 + n2 + n3) /3;
    notaPromedio2 = (n4 + n5) /2;
    notapromedio3 = (n6);
    notapromedio4 = (n7 + n8) /2;
    notaFinal = (notaPromedio1*0.55) + (notaPromedio2*0.15) + (notapromedio3*0.2) + (notapromedio4*0.1);
    console.log("el promedio del estudiante " + nombre + " es de: " + notaFinal)

    if(notaFinal <= 1.9){
        console.log("El nivel del estudiante es: Muy bajo \n"+"el estudiante reprobo ");
    }else if(notaFinal <= 2.9){
        console.log("El nivel del estudiante es: Bajo \n"+"el estudiante reprobo ");
    }else if(notaFinal <= 3.9){
        console.log("El nivel del estudiante es: Basico \n"+"el estudiante aprobo");
    }else if(notaFinal <= 4.6){
        console.log("El nivel del estudiante es: Alto \n"+"el estudiante aprobo");
    }else if(notaFinal <= 5){
        console.log("El nivel del estudiante es: Superior \n"+"el estudiante aprobo");
    }

    
}
