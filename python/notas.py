


nombre = input(" Ingrese el nombre del estudiante ")
nota1 = int(input(" Ingrese el valor de la nota 1 "))
nota2 = int(input(" Ingrese el valor de la nota 2 "))
nota3 = int(input(" Ingrese el valor de la nota 3 "))
nota4 = int(input(" Ingrese el valor de la nota 4 "))
nota5 = int(input(" Ingrese el valor de la nota 5 "))

notaPromedio1 = (nota1 + nota2) / 2;
notaPromedio2 = (nota3 + nota4 + nota5) / 3;
notaFinal = (notaPromedio1 *0.4 ) + (notaPromedio2 * 0.6 )

print("La nota del estudiante ", nombre, " es: ", notaFinal)