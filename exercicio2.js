const readline = require('readline-sync');

const numero = readline.question("Informe um numero: \n");
proximo = 0;
primeiroNum = 0;
segundoNum = 1;

while (proximo < numero) {
    proximo = primeiroNum + segundoNum;
    primeiroNum = segundoNum;
    segundoNum = proximo;
}

if (proximo == numero) {
    console.log("O Número " + numero + " pertence a sequencia");
} else {
    console.log("O Número não pertence a sequência");
}
