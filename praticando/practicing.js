// Lucian's Luscious Lasagna  

const EXPECTED_MINUTES_IN_OVEN = 40;
const PREPARATION_MINUTES_PER_LAYER = 2;

function remainingMinutesInOven(actualMinutesInOven) {
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

function preparationTimeInMinutes(numberOfLayers) {
    return PREPARATION_MINUTES_PER_LAYER * numberOfLayers
}

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven
}

console.log(remainingMinutesInOven(30))
console.log(preparationTimeInMinutes(3))
console.log(totalTimeInMinutes(3, 30))

// Acessando string (charAt()) e Index = []
var gato = "cat"
console.log("cat".charAt(1))
console.log("cat"[2])

// slice - extrai string
console.log("cat".slice(0, 3))

// convertendo string pra boolean
const x = 'true';
console.log(typeof x)
const xBoolean = x === 'true';
console.log(typeof xBoolean)

const stack = [1, 2, 4, 1]
stack[2] = 6
console.log(stack)
// unshift adiciona um novo elemento no array; com console.log ele retorna a length.
stack.unshift(8)
console.log(stack)

// Vehicle Purchase
function needsLicense(kind) {
    return kind === 'car' || kind === 'truck';
}
function calculateResellPrice(originalPrice, age) {
    if (age < 3) {
    return originalPrice * 0.8;
}   else if (age > 10) {
    return originalPrice * 0.5;
}   else if(age >= 3) {
    return originalPrice * 0.7;
}}
function chooseVehicle(option1, option2) {
    if (option1 < option2) {
    return `${option1}` + ' is clearly the better choice.'; 
}
    else {
    return `${option2}` + ' is clearly the better choice.';
}}


console.log(needsLicense('car'))
console.log(needsLicense('truck'))
console.log(needsLicense('bike'))
console.log(calculateResellPrice(1000, 2))
console.log(calculateResellPrice(1000, 12))
console.log(calculateResellPrice(1000, 5))
console.log(chooseVehicle('Astra', 'Uno'))


// Palindrome Exercise

function palindrome(string){
    var splitString = string.split("");
    var reverseArr = splitString.reverse();
    var joinArr = reverseArr.join("");
    if(string == joinArr){
        return true;
    } else {
        return false;
    }
};

console.log(palindrome('racecar'));
console.log(palindrome('great as always'));