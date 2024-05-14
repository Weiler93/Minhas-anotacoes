a = input('Digite o primeiro número: ') 
b = input('Digite o segundo número: ') 
 
print("Tipo da variavel a:", type(a)) 
print("Tipo da variavel b:", type(b)) 
 
multiplicação = int(a) * int(b) 
 
print("Tipo da variavel multiplicação ", type(multiplicação)) 
 
print('O resultado da multiplicação é ' + str(multiplicação)) 
 
multiplicação = str(multiplicação)
 
print("Tipo da variavel multiplicação", type(multiplicação)) 
print('O resultado da multiplicação é ' + str(multiplicação))

# primeira forma de fazer o  exercicio -02 depois de varios testes foi imprimido da seguinte forma

#$ py exeercico-20 py 
#Digite o primeiro número: 12
#Digite o segundo número: 5
#Tipo da variavel a: <class 'str'>
#Tipo da variavel b: <class 'str'>
#Tipo da variavel multiplicação  <class 'int'>
#O resultado da multiplicação é 60
#Tipo da variavel multiplicação <class 'str'>
#O resultado da multiplicação é 60

a = input('Digite o primeiro número: ') 
b = input('Digite o segundo número: ') 
 
multiplicação = int(a) * int(b) 
 

multiplicação = str(multiplicação)
 

print('resultado  ' + str(multiplicação))
 
# Digite o primeiro número: 54
# Digite o segundo número: 25
# resultado  1350
