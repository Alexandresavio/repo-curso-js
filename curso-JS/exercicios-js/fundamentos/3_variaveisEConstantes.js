//sintaxe de declaração variaveis 
var a = 3;

/* Let -> Escopo de bloco: As variáveis declaradas com let têm escopo de bloco,
 * o que significa que são visíveis apenas dentro do bloco em que são declaradas,
 * incluindo blocos if, loops for, while, etc. 
 */
let b = 4;

var a = 30;// var permite redeclarar a variavel quantas vesez quiser.
b = 45;

console.log(a, b);

a = 300;
b = 400;

console.log(a, b);

//sintaxe de declaração constante
const c = 50;
//c = 5
console.log(c);

if (true) {
    var x = 10;
    console.log(x); // 10
}
console.log(x); // 10

 