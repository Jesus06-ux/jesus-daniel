#  Un comerciante desea aplicar un descuento a sus productos en funcion a sus
#  precios de la siguiente manera:

# 	1. Si el precio es mayor a $100 el 10%
# 	2. Si el precio es mayor a $100 y menor a $200 el 20%
# 	3. Si el precio es mayor a $200 el 25%

# Es su deber como desarrollador escribir un algoritmo que le permita al comerciante 
# ingresar la cantidad de productos y el precio de cada uno. El algoritmo
# tambien debe imprimir en pantalla el calculo de los descuentos.

producto = int(input("ingrese la cantidad de productos: "))
descuento = 0
valortotal = 0


while producto <= 0:
    producto=int(input("ingrese el prodocto"))

for i in range(0, producto):   
    print("") 