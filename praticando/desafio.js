// Imprimindo de 1 a 100 sem utilizar números

// Primeira forma
// const texto = 'xxxxxxxxxx' + 'xxxxxxxxxx' + 'xxxxxxxxxx' + 'xxxxxxxxxx' + 'xxxxxxxxxx' + 'xxxxxxxxxx' +
// 'xxxxxxxxxx' + 'xxxxxxxxxx' + 'xxxxxxxxxx' + 'xxxxxxxxxxx';

// for(let i = 'x'; i != texto; i += 'x'){
//    console.log(i.length);
// }

// Segunda forma
const texto = 'xxx';

for(let i = ''; i.length.toString().length != texto.length; i += 'x'){
    console.log(i.length + 'x'.length)
}

// Terceira forma
const zero = ''.length;
const um =  ' '.length;
const cem = `${um}${zero}${zero}`;

for(let i = um; i <= cem; i += um){
    console.log(i);
}

// Quarta forma
let a = [];
while(true){
    console.log(a.push(a.length));
    if(a.length.toString().length === 'xxx'.length)
    break;
}
