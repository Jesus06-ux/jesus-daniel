let samsung = parseInt(prompt("ingrese la cantidad de celulares samsung: "));
let iphone = parseInt(prompt("ingrese la cantidad de celulares iphone : "));
let motorola = parseInt(prompt("ingrese la cantidad de celulares motorola: "));
let xiaomi = parseInt(prompt("ingrese la cantidad de celulares xiaomi: "));
let oppo = parseInt(prompt("ingrese la cantidad de celulares oppo: "));
let huawei = parseInt(prompt("ingrese la cantidad de celulares huawei: "));

let cantidad = parseInt(prompt("ingrese cuantas marcas desea vender:"))

opcion = 0;
let precioSA = 0;
let precioIP = 0;
let precioMO = 0;
let precioXI = 0;
let precioOP = 0;
let precioHU = 0;

let samsungV = 0;
let iphoneV = 0;
let motorolaV = 0;
let xiaomiV = 0;
let oppoV = 0;
let huaweiV = 0;

suma = 0;
sumacel= 0;





for(index = 0; index<cantidad; index++){
    opcion= parseInt(prompt("escoja la marca de celular que desea vender: \n"+
    "1. samsung \n"+
    "2. iphone \n"+
    "3. motorola \n"+
    "4. xiaomi \n"+
    "5. Oppo \n"+
    "6. huawei \n"))

    switch(opcion){
        case 1:
            precioSA = 13000
            samsungV = parseInt(prompt("cuantos celulares samsung va a vender: "))
            if(samsungV > 0 && samsungV <= samsung){
                console.log("samsung: "+ precioSA);
                precioSA = precioSA* samsungV;
                console.log("precio total de los samsung vendidos es: "+ precioSA);
            }
            break
        case 2:
            precioIP = 20000
            iphoneV = parseInt(prompt("cuantos celulares Iphone va a vender: "))
            if(iphoneV > 0 && iphoneV <= iphone){
                console.log("iphone: "+ precioIP);
                precioIP = precioIP * iphoneV;
                console.log("precio total de iphone vendidos es:"+ precioIP);
            } break
        case 3:
            precioMO = 10000
            motorolaV = parseInt(prompt("cuantos celulares motorola va a vender: "))
            if(motorolaV > 0 && motorolaV <= motorola){
                console.log("iphone: "+ precioMO);
                precioMO = precioMO * motorolaV;
                console.log("precio total de iphone vendidos es:"+ precioMO);
            } break
        case 4:
            precioXI = 15000
            xiaomiV = parseInt(prompt("cuantos celulares xiaomi va a vender: "))
            if(xiaomiV > 0 && xiaomiV <= xiaomi){
                console.log("iphone: "+ precioXI);
                precioXI = precioXI * xiaomiV;
                console.log("precio total de iphone vendidos es:"+ precioXI);
            } break
        case 5:
            precioOP = 9000
            oppoV = parseInt(prompt("cuantos celulares Oppo va a vender: "))
            if(oppoV > 0 && oppoV <= oppo){
                console.log("iphone: "+ precioOP);
                precioOP = precioOP * oppoV;
                console.log("precio total de iphone vendidos es:"+ precioOP);
            } break
        case 6:
            precioHU = 8000
            huaweiV = parseInt(prompt("cuantos celulares Huawei va a vender: "))
            if(huaweiV > 0 && huaweiV <= huawei){
                console.log("iphone: "+ precioHU);
                precioHU = precioHU * huaweiV;
                console.log("precio total de iphone vendidos es:"+ precioHU);
            } break
            default:
                break
    }
    
};

suma = precioSA+precioIP+precioHU+precioMO+precioXI+precioOP
sumacel = samsungV+iphoneV+motorolaV+xiaomiV+oppoV+huaweiV
console.log("factura: la suma del precio total es de: "+ suma + "\n");
console.log("la cantidad de celulares vendidos es: "+ sumacel);