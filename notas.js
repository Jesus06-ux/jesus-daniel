/*Desarrolle un algoritmo que permit convertir calificaciones numericas, segun la siguiente tabla:
	A = 19 y 20.
	B = 16, 17 y 18.
	C = 13, 14 y 15. 
	D = 10, 11 y 12.
	E = 1 hasta 9.

Las notas solo pueden ser numeros entre 1 y 20.*/

const nota = parseInt(prompt("ingrese la nota"))

if(nota > 0 && nota <=20){
    if(nota <= 9){
        console.log("la nota es: E ")
    }else if(nota <= 12){
        console.log("la nota es. D ")
    }else if(nota <= 15){
        console.log("la nota es: C ")
    }else if(nota <= 18){
        console.log("la nota es: B ")
    }else if(nota <= 20){
        console.log("la nota es: A ")
    }

}else{
    console.log(" la nota no es correcta ")
}
