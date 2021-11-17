// Criação da Promise
const myPromise = new Promise((resolve, reject) => {
    const nome = "Mateus";

    if (nome === "Mateus") {
      resolve("Usuário Mateus encontrado.")
    } else {
      reject("O usuário Mateus não foi encontrado.")
    }
});

myPromise.then((data) => {
    console.log(data);
});

// Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {
    const nome = "Mateus";

    if (nome === "Mateus") {
      resolve("Usuário Mateus encontrado.")
    } else {
      reject("O usuário Mateus não foi encontrado.")
    }
});

myPromise2.then((data) => {
    return data.toLowerCase()
}).then((modString) => {
    console.log(modString)
})

// Retorno do catch
const myPromise3 = new Promise((resolve, reject) => {
    const nome = "Felipe";

    if (nome === "Mateus") {
      resolve("Usuário Mateus encontrado.")
    } else {
      reject("O usuário Mateus não foi encontrado.")
    }
});

myPromise3.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log('Aconteceu um erro: ' + err);
})

// Resolver várias promises com all()
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p1 Ok! Timeout")
    }, 2000)
}) 

const p2 = new Promise((resolve, reject) => {
    resolve("p2 Ok!")
}) 

const p3 = new Promise((resolve, reject) => {
    resolve("p3 Ok!")
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data);
});

console.log("Depois do all()")

// Várias promises com race()
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p4 Ok! Timeout")
    }, 2000)
}) 

const p5 = new Promise((resolve, reject) => {
    resolve("p5 Ok!")
}) 

const p6 = new Promise((resolve, reject) => {
    resolve("p6 Ok!")
})

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data);
});

// Fetch request - API Github
// Fetch API

const userName = 'Mateus81'
fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
     Accept: 'application/vnd.github.v3+json',
    },
}).then((response) =>{
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((data) => {
    console.log(`O nome do usuário é ${data.name}`)
}).catch((err) => {
    console.log(`Houve algum erro: ${err}`)
});