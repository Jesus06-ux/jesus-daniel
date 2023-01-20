# Diseñe un algoritmo en el cual el usuario deba ingresar 2 numeros enteros n y m. Estos numeros serviran para definir un intervalo. La funcion del algoritmo 
# sera sumar todos los numeros pares que se encuentren dentro del intervalo [n.m].


intervaloN = int(input("ingrese el primer intervalo "))
intervaloM = int (input("ingrese el segundo intervalo "))
suma=0

if intervaloN >= 0 and intervaloN < intervaloM:

    for i in range( intervaloN, intervaloM+1):
       if i % 2 == 0:
            suma = suma + i
           
    print("la suma de los pares es: ", suma)

else:
    print("los intervalos estan fuera del rango ")


