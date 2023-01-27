x=0;
numero=0;
numero = int(input("ingrese un numero mayor a 100: "))
while numero < 100:
    numero = print("Error: el numero es menor a 100 ")
    break
for i in range(2, numero):
    x = 2
    y = True
    while y and x < i:
        if i % x ==0:
            y = False
        else:
            x = x + 1
    if y:
        print("los numeros primos son: ", i)