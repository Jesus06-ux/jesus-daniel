let diametro = parseFloat(prompt("ingrese el diametro de la rueda: "));
let grosor = parseFloat(prompt("ingrese el grosor de la rueda"));

if(diametro > 1.4){
    console.log("la rueda es para un vehiculo grande: ");
    if(grosor < 0.4){
        console.log("el grosor para esta rueda es inferior al recomendado")
    }
}else if(diametro <= 1.4 && diametro > 0.8){
    console.log("la rueda es para un vehiculo mediano");
    if(grosor < 0.25){
        console.log("el grosor para esta rueda es inferior al recomendado")
    }
}else{
    console.log("la rueda es para un vehiculo pequeño");
}