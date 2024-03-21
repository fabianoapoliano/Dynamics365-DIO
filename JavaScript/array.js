console.log("hello word")


                            /*Anotações da aula 5 de JavaScript.*/


//Arrays (matriz) -> usados para armazenr vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os arrays NÃO possuem propriedades. O item dentro dele é encontrado pela posição;
//Array é como se fosse uma lsita de itens, com controle, por ordem de posição dentro dele;
/*
Ex.: const lista = ["arroz", "feijão", "macarrão", "leite"];
A lista [0] (lista na posição 0) vai conter valor "arroz".
A lista [3] (lista na posição 3) vai conter valor "leite".
*/
//Obs.: os array são sempre utilizados entre [], diferente dos objetos que são entre {};


const lista = ["arroz", "feijão", "macarrão", "leite"];
console.log(lista[0]); //retorna o índice "arroz"
console.log(lista[3]); //retorna o índice "leite"

let x = lista[2]; //variável criada para retornar o valor do índice 2
console.log(x); //retorna o índice "macarrão"

lista[1] = "café"; //altera o índice 2 para "café"
console.log(lista[1]); //retorna o valor "café"

lista.push("carne"); //acrescenta um índice ao final do array

/*
lista.pop(); //remove o último índice da matriz
lista.shift(); //remove o primeiro índice da matriz.
lista.unshift("tomate") //altera o primeiro índice da matriz. Nesse caso, o índice [0] agora é "tomate"
lista.splice(1,0,"legumes", "vegeais") //na posição 1, deleta 0 índices, acrescenta "legumes" na posição [1], acrescenta "vegeais" na posição [2]
*/

console.log(lista); //retorna todos os valores da matriz "lista"

//os array podem armazenar não somente um dado (string ou número), mas também podem armazenar objetos, funções e até mesmo outros array

console.log(lista.length); //mostra a quantidade de índices dentro do array

console.log(lista[lista.length - 1]); //mostra o último valor da matriz "lista", que no caso é "carne"

console.log(lista.join(", ")); //altera o separador dos valores do array. Nesse caso, separando por vírgulas.

const lista1 = [
    "refrigerante",
    "suco",
    "agua"
];

console.log(lista1);

const superLista = lista.concat(lista1); //variável para concatena os dois array
console.log(superLista); //retorna o valor das duas matrizes juntas

const listaOrdenada = superLista.sort(); //variável para colocar os itens de superLista em ordem alfabética
console.log(listaOrdenada); //retorna valores em ordem alfabética

/*
IMPORTANTE:
para colocar matrizes numéricas em ordem crescente, utilizar a formula:

matriz.sort(function (a, b) {return a - b});

*/


                            /*Anotações da aula 6 de JavaScript.*/