
function HelloWorld() {
    return 'Hello, World!'
}
console.log(HelloWorld())

var idade = 22;
var idadeMinima = 18;

if (idade >= idadeMinima) {
    console.log('Pode tirar a carteira.')
}
else if (idade == 17) {
    console.log('Pode fazer um pré-cadastro.')
}
else {
console.log('Ainda não pode tirar a carteira.')}

// "===" e "!==" São comparações de tipo e valor, diferente do "==".

var idade = ("Informe a sua idade", "15");
if (idade < 18) mensagem = "A idade informada é de um menor!"
else
mensagem = "Se não estiver mentindo é maior de idade!";
console.log(mensagem);

// Exercício Array usando reverse()
arr = new Array("mamão", "uva", "melancia", "banana");
arr.reverse()
console.log(arr)

// Exercício conversão Celsius - Fahrenheit: Escreva um programa que imprima uma tabela 
// de conversão entre graus Celsius e graus Fahrenheit
// ( fahr = (cels * 9/5) – 32 ) entre -40 e 100 °C, com incrementos de 10.

for (cels = -40; cels < 100; cels = cels + 10) {
    (fahr = (cels * 9/5 - 32))
    console.log(fahr)
}

// Break - laço for
for (i = 0; i < 10; i++) {

    if(i === 5)
    break;
    console.log(i)
}

// if ternário - ? = if / : = else
const someNumber = 14;
let testingANumber = someNumber < 20 ? 'Yes' : 'No'
console.log(testingANumber);

// callback function
function exibir(num) {
    console.log("A operação resultou em: " + num);
}

function soma(a, b, callback) {
    var op = a + b;
    callback(op);
}

soma(21, 7, exibir);

// setTimeout e setInterval
setTimeout(function(){
    console.log("Testando o setTimeout");
}, 2000);

var myInterval = setInterval(function(){
    console.log("Testando setInterval")
}, 1000);

// clearTimeout e clearInterval
var x = 0;
var myTimer = setTimeout(function(){
    console.log('O x é 0');
}, 1500);

var x = 5;
if (x > 0){
    clearTimeout(myTimer);
    console.log("O x passou de 0");
}

setTimeout(function(){
    console.log("Não precisa mais repetir")
    clearInterval(myInterval);
}, 1500);

// Gerando número aleatório entre 2
function randomNumberInterval(a, b){
    return Math.floor(Math.random() * (b - a + 1)) + a;
};

console.log(randomNumberInterval(0, 10));
console.log(randomNumberInterval(11, 100));