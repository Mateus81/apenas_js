class Clube {
    constructor(nome, titulos, tamanhoTorcida, rebaixamentos, peso){
        this.nome = nome
        this.titulos = titulos
        this.tamanhoTorcida = tamanhoTorcida
        this.rebaixamentos = rebaixamentos
    }
}
const flamengo = new Clube('Flamengo', 59, 'Gigante', 0)
const corinthians = new Clube('Corinthians', 55, 'Gigante', 1)
const saoPaulo = new Clube('São Paulo', 53, 'Gigante', 0)
const palmeiras = new Clube('Palmeiras', 56, 'Grande', 2)
const cruzeiro = new Clube('Cruzeiro', 58, 'Grande', 1)
const santos = new Clube('Santos', 47, 'Pequena', 0)
const vasco = new Clube('Vasco', 38, 'Grande', 4)
const internacional = new Clube('Internacional', 57, 'Grande', 1)
const gremio = new Clube('Grêmio', 58, 'Grande', 3)

// Qual o maior clube do Sul?

if (gremio.titulos > internacional.titulos){
    console.log(`O ${gremio.nome} leva vantagem sobre o ${internacional.nome} quando se fala de títulos.`)
}
if (gremio.rebaixamentos > internacional.rebaixamentos){
    console.log(`O ${internacional.nome} possui menos rebaixamentos que o ${gremio.nome}.`)
}
console.log('Ambas as torcidas de Grêmio e Inter são grandes, fica difícil saber o maior, os critérios são seus...');

// Qual o maior clube do Rio?

if (flamengo.titulos > vasco.titulos){
    console.log(`O ${flamengo.nome} possui mais conquistas que o ${vasco.nome}.`)
}

if (vasco.rebaixamentos > flamengo.rebaixamentos){
    console.log(`O ${flamengo.nome} está a frente do rival ${vasco.nome}.`)
}

// Qual o maior clube de São Paulo?
(corinthians.titulos > palmeiras.titulos) ? console.log(`O ${corinthians.nome}
leva vantagem sobre o ${palmeiras.nome} quando se fala de títulos.`) : console.log(`O ${palmeiras.nome} leva vantagem nos titulos.`)

if (saoPaulo.titulos > santos.titulos) {
    console.log(`O ${saoPaulo.nome} possui mais títulos que o ${santos.nome}.`)
} else { 
    console.log(`O ${santos.nome} leva vantagem.`)
}

console.log(`A disputa fica entre ${saoPaulo.nome} e ${palmeiras.nome}. Pelo tamanho de suas torcidas, diria que o São Paulo leva vantagem em seu estado.`);

// Qual o maior do Brasil?

if (cruzeiro.titulos > saoPaulo.titulos){
    console.log(`O ${cruzeiro.nome} possui mais títulos que o ${saoPaulo.nome}, porém está amargando edições na Série B.`)
} 

console.log(`A disputa fica entre ${saoPaulo.nome} e ${flamengo.nome}.`)

if (flamengo.titulos > saoPaulo.titulos) { 
    console.log(`O ${flamengo.nome} é o maior clube.`) 
} else { 
    console.log(`O ${saoPaulo.nome} é o maior clube.`)
}