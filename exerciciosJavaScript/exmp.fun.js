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

