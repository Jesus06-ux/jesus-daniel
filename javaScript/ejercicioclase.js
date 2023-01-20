// En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua

// Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.

let menu;

do{
    menu = parseFloat(prompt("ingrese el numero del menú que desea de la siguiente manera: \n"
    +"1. carne. \n"
    +"2. pescado. \n"
    +"3. verdura. \n"
    +"marque 0 para salir."));

    if(!Number.isInteger(menu) || menu < 0 || menu > 3){
            alert("ingrese el nunmero valido de menú");
    }else{
        switch(menu){
            case 1:
                console.log("la carne vendrá acompañada de un vino tinto");
            break; 

            case 2:
                console.log("la pescado vendrá acompañada de un vino blanco");
            break; 

            case 3:
                console.log("la verdura vendrá acompañada de agua");
            break; 
        }
    }

}while (menu !==0)