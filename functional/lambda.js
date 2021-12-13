let r;

const soma = a => b => c => a + b + c
r = soma(1)(2)(3)
console.log(r)

const primeiro = a => b => a
r = primeiro(12)(5)
console.log(r)

const ultimo = _ => b => b
r = ultimo(3)(8)
console.log(r)

const troca = f => a => b => f(b)(a)
r = troca(primeiro)(3)(8)
console.log(r)

r =  troca(ultimo)(3)(8)
console.log(r)

const T = primeiro
const F = ultimo

T.inspect = () => 'Verdadeiro (primeiro)';
F.inspect = () => 'Falso (ultimo)';

const NOT = a => a(F)(T)
r = NOT(T)
console.log(r)

const AND = a => b => a(b)(F)
r = AND(T)(T)
console.log(r)

const OR = a => b => a(T)(b)
r = OR(F)(T)
console.log(r)