# Desarrolle un algortimo que reciba un numero entero y escriba si dicho numero es par o impar.

numero = int (input("ingrese un numero entero: "))

if numero > 0:
    if numero  % 2 == 0:
        print('el valor ingresado es par ')
    else:
        print("el valor ingresado es impar ")
else:
    print("el nuemro tiene que ser positivo")