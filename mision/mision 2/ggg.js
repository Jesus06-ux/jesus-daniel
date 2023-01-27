let xiaomi = 0
let samsung = 0
let motorola = 0
let total = 5
let pedido 

for(let i = 0; i < 5; i++){
    pedido = prompt('ingrese la marca de celular');
    switch(pedido){
        case "xiaomi":
            xiaomi += 1;
            break;
        case "samsung":
            samsung += 1;
            break;
        case "motorola":
            motorola += 1;
            break;
        default:
            total -= 1;
            console.log('La marca infresada no es valida')
            break;

    }
}

const Txiaomi = (xiaomi / total) * 100;
const Tsamsung = (samsung / total) * 100;
const Tmotorola = (motorola / total) * 100;

console.log('El porcentaje de celulares xiaomi es de:',Txiaomi);
console.log('El porcentaje de celulares samsung es de:',Tsamsung);
console.log('El porcentaje de celulares motorola es de:',Tmotorola);