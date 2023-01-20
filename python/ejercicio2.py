##Desarrolle un algoritmo que reciba la base y altura de un triangulo en cm. Los 2 valores ingresados no pueden ser iguales, ademas el algoritmo
 ##debe calcular el area del triangulo si la base es mayor a 5cm y la altura es mayor a 4cm, si no lo son el algoritmo debe imprimir el valor de la
 ##base multiplicado por 2 y sumarle 10.

base = int (input("ingrese la base del triangulo "))
altura = int (input("ingrese la altura del triangulo "))

if base != altura:
    if base > 5 and altura > 4:
        area = (base*altura)/2
        print("el area del triangulo es: ", area)
    else:
        area2 = (base*2)+ 10
        print("el area del trina¿gulo es: ", area2)