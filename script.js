// 1. Loop "while" até o usuário digitar o número 3
let numero;
while (true) {
    numero = parseInt(prompt("Digite um número: "));
    if (numero === 3) {
        console.log("Programa encerrado.");
        break;
    }
}

// 2. Loop "do...while" para solicitar senha (máximo 3 tentativas)
const senhaCorreta = "1234";
let tentativas = 0;
let senha;

do {
    senha = prompt("Digite a senha: ");
    if (senha === senhaCorreta) {
        console.log("Acesso concedido!");
        break;
    } else {
        console.log("Senha incorreta. Tente novamente.");
        tentativas++;
    }
} while (tentativas < 3);

if (tentativas === 3) {
    console.log("Senha bloqueada!");
}

// 3. Criar uma lista com 4 números e exibi-los
const numeros = [10, 20, 30, 40];
numeros.forEach(num => console.log(num));

// 4. Solicitar 5 números do usuário e armazená-los em uma lista
const numerosUsuario = [];
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt(`Digite o ${i+1}º número:`));
    numerosUsuario.push(numero);
}
console.log("Os números digitados foram:", numerosUsuario);

// 5. Função sem parâmetros que retorna uma mensagem personalizada
function mensagem() {
    return "Seja bem-vindo ao programa Trilhas! Aproveite seu aprendizado.";
}
console.log(mensagem());

// 6. Função que recebe um nome e retorna uma mensagem personalizada
function saudacao(nome) {
    return `Olá, ${nome}, que bom ter você no programa Trilhas.`;
}
const nomeUsuario = p
rompt("Digite seu nome:");
console.log(saudacao(nomeUsuario));

// 7. Função que calcula o quadrado de um número
function calcularQuadrado(numero) {
    return numero ** 2;
}
const num = parseInt(prompt("Digite um número para calcular o quadrado:"));
console.log(`O quadrado de ${num} é ${calcularQuadrado(num)}.`);

// 8. Função que faz a subtração entre dois números
function Subtracao(num1, num2) {
    return num1 - num2;
}
const a = parseInt(prompt("Digite o primeiro número:"));
const b = parseInt(prompt("Digite o segundo número:"));
console.log(`O resultado da subtração entre ${a} e ${b} é ${Subtracao(a, b)}.`);
