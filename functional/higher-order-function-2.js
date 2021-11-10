// curring
function finalPrice(tax) {
    return function(price) {
        return price * (1 + tax)
    }
}

const nyFinalPrice = finalPrice(0.0875)

console.log(nyFinalPrice(26.0))
console.log(nyFinalPrice(32.4))
console.log(nyFinalPrice(200.0))