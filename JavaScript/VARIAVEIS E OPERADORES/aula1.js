/*
Anotações de estudos de JavaScript
*/

console.log("Olá, mundo!"); //retorna o resultado no console

//o ; separa as DECLARAÇÕES. Pode-se dizer que cada comando é uma declaraçao, podendo haver várias declarações na mesma linha. ex.: var a, b, c; a=5; b=6; c=7;

//sintaxe do js:
// "com aspas" - entende como texto
// sem aspas - entende como número
// "+", "-", "/", "*" = operadores aritméticos
// "=" - operador de atribuição
// var, let e const - variáveis que armazenam valores

var pote = "chocolate"; //dentro da variável pote tem chocolate
console.log(pote);

var a, b, c; //declação de variáveis

a = 2; //atribuição dos valores das variáveis 
b = 3; //atribuição dos valores das variáveis 
c = a + b; //atribuição dos valores das variáveis 
console.log(c);

var nome, sobrenome, nomeCompleto, idade;
nome = "Fabiano";
sobrenome = "Apoliano";
idade = "30";
nomeCompleto = nome + " " + sobrenome + " tem " + idade + " anos.";

console.log(nomeCompleto); //concatenação de valores de texto (string)

let endereco; //variável que não pode ser redeclarada, não pode ser sobreposta
endereco = "XXX 304";
console.log(endereco);
/*let endereco;*/ //erro de sintaxe pois a variável let não pode ser redeclarada

let x = 1;
{
    let x = 2;
    console.log(x); //mostra o valor dentro do bloco = "2"
}
console.log(x); //mostra o valor fora do bloco = "1"

/* Como o let não pode ser sobrescrito, é ideal para códigos muito grandes, para não ter problema de sobrescrever variáveis. Preferível o uso do let */

const telefone = "00 00000-0000"; //constante, que nunca muda. Diferente do let, mesmo dentro de blocos não pode ser repetido

console.log(telefone);
/*
{
    const telefone = "00 1111-0000"; //não dá erro de sintaxe, mas mostra o valor do primeiro const;
    console.log(telefone);
}
*/



