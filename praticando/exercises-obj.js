// High Score Board Exercise
function createScoreBoard() {
    return {'The Best Ever':1000000, };
}
function addPlayer(scoreBoard, player, score) {
    scoreBoard[player] = score;   
    return scoreBoard; 
}
function removePlayer(scoreBoard, player, score) {
    delete scoreBoard[player];
    return scoreBoard;
}
function updateScore(scoreBoard, player, points) {
    scoreBoard[player] += points;
    return scoreBoard;
}
function applyMondayBonus(scoreBoard){
for (let key in scoreBoard) {
    scoreBoard[key] += 100;
  }
  return scoreBoard;
}
function normalizeScore({ score, normalizeFunction }) {
    return normalizeFunction(score);
}

console.log(createScoreBoard());
console.log(addPlayer({'Val': 373},'Trent', 3278));
console.log(removePlayer({'Figo': 213},'Raul', 23));
console.log(updateScore({'Gal': 345}, 'Rich', 76));
console.log(applyMondayBonus({'Val': 373}));

// Amusement Park Exercise
function createVisitor(name, age, ticketId) {
    const visitor = {name, age, ticketId};
    return visitor;
}

function revokeTicket(visitor) {
    visitor.ticketId = null;
    return visitor;
}

console.log(createVisitor('Fernando', 32, 'H323AZ4'));
console.log(revokeTicket('Fernando', 32, 'H323AZ4'));

// Lasagna Master Exercise
function cookingStatus(remainingTime) {
    if(remainingTime == 0){
      return 'Lasagna is done.';
}   else if(remainingTime == null) {
      return 'You forgot to set the timer.';
}   else if(remainingTime > 0) {
      return 'Not done, please wait.';
}
}

let layers = new Array([]);
function preparationTime(layers, preparationTimePerLayers = 2) {
    if (preparationTimePerLayers){
      return layers * preparationTimePerLayers;
}   else if(layers.length > 0)
      return layers * preparationTimePerLayers;
}

console.log(cookingStatus(4));
console.log(preparationTime(['sauce', 'noodles']));

// Classes
class Product{
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productDetails(){
        return `O nome do produto é ${this.name} e o preço é ${this.price}`
    }
}

const socks = new Product('Meia cinza', 9.99)
const shirt = new Product('Camisa preta', 19.99)
console.log(socks)
console.log(shirt)
console.log(shirt.name)
console.log(socks.productDetails())

// Herança
class SuperProduct extends Product {
    constructor(name, price, size){
        super(name, price)
        this.size = size
    }

    showAdjective(adjective){
        return `O ${this.name} é muito ${adjective}`
    }

    // static
    static inStock(){
        console.log(true);
    }
}

const shoes = new SuperProduct('Tênis vermelho', 49.99, '42')
console.log(shoes.name)
console.log(shoes.size)
console.log(shoes.showAdjective('Bom'))
SuperProduct.inStock()