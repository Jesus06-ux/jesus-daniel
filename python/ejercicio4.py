# Desarrolle un algoritmo que permit convertir calificaciones numericas, segun la # # siguiente tabla:
# 	A = 19 y 20.
# 	B = 16, 17 y 18.
# 	C = 13, 14 y 15. 
# 	D = 10, 11 y 12.
# 	E = 1 hasta 9.

# Las notas solo pueden ser numeros entre 1 y 20.


nota = int(input("ingrese el valor de la nota: "))

if nota > 0 and nota <= 20:
    if nota <= 9:
        print('el valor de la nota es : E ')
    elif nota <= 12:
        print('el valor de la nota es: D')
    elif nota <= 15:
        print('el valor de la nota es: C ')
    elif nota <= 18:
        print('el vlaor de la nota es: B ')
    elif nota <= 20:
        print('el vlaor de la nota es: A ')
else:
    print ('el valor tiene que ser mayor a 0 ')