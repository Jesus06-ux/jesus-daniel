#  Un comerciante desea aplicar un descuento a sus productos en funcion a sus
#  precios de la siguiente manera:

# 	1. Si el precio es mayor a $100 el 10%
# 	2. Si el precio es mayor a $100 y menor a $200 el 20%
# 	3. Si el precio es mayor a $200 el 25%

# Es su deber como desarrollador escribir un algoritmo que le permita al comerciante
# ingresar la cantidad de productos y el precio de cada uno. El algoritmo
# tambien debe imprimir en pantalla el calculo de los descuentos.


producto = int(input("ingrese la cantidad de productos: "))

while producto <= 0:
    producto = int(input("Error: ingrese el prodocto de nuevo: "))
for i in range(0, producto):
    valor = int(input("ingrese el valor del producto: "))
    if valor >= 100:
       descuento = valor*0.10
       valortotal = valor - descuento
       print("el valor total es: ", valortotal)
    elif valor <= 200:
       descuento = valor*0.20
       valortotal = valor - descuento
       print("el valor total es: ", valortotal)
    elif valor > 200:
       descuento = valor*0.25
       valortotal = valor - descuento
       print("el valor total es: ", valortotal)
