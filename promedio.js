
const n1 = parseInt(prompt("ingrese el primer numero"));
const n2 = parseInt(prompt("ingrese el segundo numero"));
const n3 = parseInt(prompt("ingrese el tercer numero"));
let promedio;

if(n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10){
    alert("error los numeros estan fuera del rango");
}else {
    let promedio = (n1+n2+n3)/3;
    console.log(promedio > 5 ? true : false);
}

