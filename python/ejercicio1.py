##1.Desarrolle un algoritmo que permita leer 3 números enteros. El algoritmo debe imprimir cual es el numero mayor y cual es el numero menor entre los 3.
##Ademas ninguno de los 3 numeros ingresados pueden ser iguales. En caso de que el usuario ingrese 2 numeros iguales debe mostrar una alerta.

n1 = int (input("ingrese un numero "))
n2 = int (input("ingrese un numero "))
n3 = int (input("ingrese un numero "))

if n1 > 0 and n2 > 0 and n3 > 0:
     if n1 != n2 != n3:
            if n1 > n2 and n1 > n3:
                print ("el nuemro mayor es: ", (n1))
            elif n2 > n3 and n2 > n1:
                print ("el nuemro mayor es: ",(n2))
            else:
                print ("el nuemro mayor es: ", (n3))

            if n1 < n2 and n1 < n3:
                    print ("el nuemro menor es: ", (n1))
            elif n2 < n3 and n2 < n1:
                print ("el nuemro menor es: ", (n2))
            else:
                print ("el nuemro menor es: ", (n3))


            
else:
    print("error")
    