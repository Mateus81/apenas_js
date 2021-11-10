const objs = [{
    nome: 'Mateus',
    idade: 20,
    estuda: true,
    jogos_favoritos: {
      chrono_trigger: 'RPG',
      metal_gear: 'Stealth'
    },
    hobbies: ['Ouvir música', 'Assistir Baki']
},
{
    nome: 'Felipe',
    idade: 25,
    esta_trabalhando: false,
    detalhes_profissao: {
      profissao: null,
      empresa: null
    },
    hobbies: ['Correr', 'Academia']
}
]

// JSON
// Convertendo objs
const jsonData = JSON.stringify(objs);
console.log(jsonData);
console.log(typeof jsonData); // Dado = String, porém é Json.

// Convertendo JSON para Obj
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(typeof objData); // Dado: Object

objData.map((pessoa) => {
    console.log(pessoa.nome);
})