// 1. Escreva um programa que solicita o some e o sobrenome. Em seguida, imprima o nome complento no console.

function nomeCompleto(nome, sobrenome){
    // return nome + " " + sobrenome
    return[nome,sobrenome].join(' ');
}

let pessoa1 = nomeCompleto('Jo','Mersa');
let pessoa2 = nomeCompleto('Damian', 'Elyjah');
let pessoa3 = nomeCompleto('Cabeça', 'de Gelo Marley');
let pessoa4 = nomeCompleto('Homa','Ranha');

let nomes = [pessoa1,pessoa2,pessoa3].join(':: ')
// let nomes = [pessoa1,pessoa2,pessoa3].join(' / ')

console.log(nomes)
console.log(pessoa2)

// 2. Escreva um programa que solicita dois números e imprima o resultado da multiplicação entre os números.

function multiplica(A, B){
    let multiplica = A * B;
    return multiplica
}

let A = 12;
let B = 8;

let resultado = multiplica(A, B)

console.log("o resultado da multiplicaçao é " + resultado)


//7. Escreva um programa que solicita a largura e a altura de um retângulo e retorna a área.

function multiplica(altura, largura){
    let multiplica = altura * largura;
    return multiplica
}

let altura = 24;
let largura = 35;

let resultadoarea = multiplica(altura, largura)
let resultadoarea1 = multiplica(16, 8)
let resultadoarea2 = multiplica(20, 36)
let resultadoarea3 = multiplica(14, 13)

console.log("o resultado da area é " + resultadoarea)
console.log("o resultado da area 1 é " + resultadoarea1)
console.log("o resultado da area 2 é " + resultadoarea2)
console.log("o resultado da area 3 é " + resultadoarea3)



//8. Escreva um programa que solicita dois números ao usuário e retorna o resultado da operação de potência do primeiro número pelo segundo

function potência(n1, n2){
    let potência = n1 ** n2;
    return potência
}

let a = 2
let b = 3
let c = 4 
let d = 6 
let e = 8 
let f = 7 

let resultadopotencia = potência(a, b)
let resultadopotencia1 = potência(c, d)
let resultadopotencia2 = potência(e, f)
let resultadopotencia3 = potência(3, 4)

console.log("o resultado da potencia é " + resultadopotencia)
console.log("o resultado da potencia 1 é " + resultadopotencia1)
console.log("o resultado da potencia 2 é " + resultadopotencia2)
console.log("o resultado da potencia 3 é " + resultadopotencia3)

//9. Escreva um programa que solicita um número ao usuário e imprime o seu dobro.

function multiplica(A,B){
    let multiplica = A * B;
    return multiplica
}

let Q = 2 

let resultadodobro = multiplica(1,Q)
let resultadodobro1 = multiplica(2,Q)
let resultadodobro2 = multiplica(3,Q)
let resultadodobro3 = multiplica(15,Q)

console.log("o resultado é " + resultadodobro,resultadodobro1,resultadodobro2,resultadodobro3)
