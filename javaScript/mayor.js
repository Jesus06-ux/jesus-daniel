//Desarrolle un algoritmo que permita leer 3 números enteros. El algoritmo debe imprimir cual es el numero mayor y cual es el numero menor entre los 3.//

const n1 = parseInt(prompt('ingrese el primer nuemro'))
const n2 = parseInt(prompt('ingrese el segundo nuemro'))
const n3 = parseInt(prompt('ingrese el tercer nuemro'))

if(n1 > 0 && n2 > 0 && n3 > 0){
    if(n1 != n2 && n2 != n3){
        if(n1 > n2 && n1 > n3){
            console.log("el numero mayor es "+ n1)
        }else if(n2 > n3 && n2 > n1){
            console.log("el numero mayor es "+ n2)
        }else{
            console.log("el numerto mayor es "+ n3)
        }

            if(n1 < n2 && n1 < n3){
                console.log("el numero menor es "+ n1)
            }else if(n2 < n3 && n2 < n1){
                console.log("el numero menor es "+ n2)
            }else{
                console.log("el numerto menor es "+ n3)
            }

    }
}else{
    alert('error')
}
