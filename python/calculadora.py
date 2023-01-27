while True:
    print("""ingrese la opcion que desea realizar: 
    1. sumar 
    2. restar 
    3. multiplicar 
    4. dividir 
    0. salir """)

    operacion = int(input("elige una opcion: "))

    if operacion == 1:
        n1=int(input("ingrese un numero: "))
        n2=int(input("ingrese un numero: "))
        print("la suma de",n1,"y",n2,"es: ",n1+n2)
    elif operacion == 2:
        n3=int(input("ingrese un numero: "))
        n4=int(input("ingrese un numero: "))
        n5=int(input("ingrese un numero: "))
        print("la resta de",n3,",",n4,"y",n5,"es: ",n3-n4-n5)
    elif operacion == 3:
        n6=int(input("ingrese un numero: "))
        n7=int(input("ingrese un numero: "))
        print("la multiplicacion de",n6,"y",n7,"es: ",n6*n7)
    elif operacion == 4:
        n8=int(input("ingrese un numero: "))
        n9=int(input("ingrese un numero: "))
        if n9 == 0:
            print("numero no valido")
        else:
            print("la division de",n8,"y",n9,"es: ",n8/n9)
    elif operacion == 0:
        if operacion == 0:
            print("gracias por su visita")
            break
    else:
        print("la opcion es incorrecta")