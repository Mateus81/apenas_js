function logParams(a, b, c) {
    console.log(a, b, c)
}
logParams(1, 2, 3, 4, 5)
logParams(1, 2, 3)
logParams(1, 2)
logParams(1)
logParams()


function defautParams(a, b, c = 0) {
    console.log(a, b, c)
}
defautParams(4, 5, 6)
defautParams(4, 5)

// spread/rest
function LogNums(...nums) {
    console.log(Array.isArray(nums))
    for(let n of nums) {
        console.log(n) 
    }
}
LogNums(1, 2, 3)

function sumAll(...nums) {
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}
console.log(sumAll(1, 2, 3, 4))
