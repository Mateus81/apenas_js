let jogos = new Set();
jogos.add("Subnautica");
jogos.add("Metal Gear Solid");
jogos.add("Crosscode");
jogos.add("Forza Horizon 5")
jogos.delete("Crosscode")

console.log(jogos)
console.log(typeof jogos)
console.log(jogos.has("The Witcher 3")); // false

console.log(jogos.size) // 3

var marcas = ["Adidas", "Nike", "Puma"];
var mySet = new Set(marcas);
console.log(mySet.has("Adidas"));