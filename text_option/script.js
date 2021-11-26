const select = document.querySelector("#options");
console.log(select);

const indice = select.selectedIndex;
const value = select.value;
const text = select.options[indice].text;

console.log(indice);
console.log(value);
console.log(text);