# 3.Diseñe un algoritmo en el cual solicite al usuario un numero entero positivo mayor a 10 y menor a 15 despues debe calcular el factorial de este numero
# e imprimirlo en pantalla.

numero = int(input("ingrese un numero entero entre 10 y 15: "))
factorial = 1
if numero < 10 and numero > 15:
        print("Error: el numero esta fuera del rango ")
else:
    for i in range(10, 15+1):
        factorial=factorial*i
print("el numero factorial es: ",factorial)