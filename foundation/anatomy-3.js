//@ts-ignore
// function expression
const increment1 = function(n) {
    return n + 1
}

// arrow function
const increment2 = (n) => {
    return n + 1
}

const increment3 = n => {
    return n + 1
}

const increment4 = n => n + 1

console.log(increment1(1))
console.log(increment2(6))
console.log(increment3(20))
console.log(increment4(90))

const sum = (a, b) => a + b
console.log(sum(5, 9)) 