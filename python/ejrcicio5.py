# Pedir dos números y decir si non múltiplos o no.

numero1 = int(input('ingrese un numero: '))
numero2 = int(input('ingrese un numero: '))

if numero1 > 0 and numero2 > 0:
    multiplo = numero1%numero2
    if multiplo == 0:
        print('los numero si son multiplos ')
    else:
        print('los numeros no son multiplos ')
else:
    print('los numeros no pueden ser negativos ')


        