class Som {
    #timbre           // '#' transforma o atributo em privado
    #frequencia

    constructor(timbre, frequencia){
        this.#timbre = timbre
        this.#frequencia = frequencia
    }
    // getters
    get timbre(){
        return this.#timbre
    }

    get frequencia(){
        return this.#frequencia
    }
    // setters
    set timbre(timbre){
        this.#timbre = timbre
    }

    set frequencia(frequencia){
        this.#frequencia = frequencia
    }

    explicar(){
        return `Esse som tem um timbre ${this.#timbre} e uma frequência ${this.#frequencia}.`
    }
}

const s1 = new Som("grave", "alta")

console.log(s1.timbre)
console.log(s1.frequencia)
console.log(s1.explicar())
console.log(JSON.stringify(s1))
console.log(Object.keys(s1))
console.log(Object.values(s1))

for(let atrib in s1){
    console.log(s1[atrib])
}