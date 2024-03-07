/*
Anotações de estudos de JavaScript
*/

                            /*Anotações da aula 1 de JavaScript.*/

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

                            /*Anotações da aula 2 de JavaScript.*/

        //Operadores:
//Operadores Aritméticos (matemáticos):  "+"; "-"; "*"; "/"; "++"; "--";

var valor1, valor2, total;
valor1 = 5;
valor2 = 2;
total1 = valor1 + valor2;

console.log(total1); //resultado da operação = 7
console.log(++total1); //resultado do incremento = 8 (soma +1 no valor da variável)
console.log(--total1); //resultado do decremento = 6(subtrai -1 no valor da variável)

//Obs.: No console vai aparecer o resultado do decremento como 7 pois está pegando o resultando anterior, que no caso é 8 e fazendo o decremento, por isso está aparecendo como 7. Se comentar os console.log anterior aparece o valor correto


//Operador de atribuição: "="; "+="; "-="; "*="; "/="; 

var valor3, valor4;
valor3 = 5;
valor4 = 2;

valor3 += valor4; //é o mesmo que escrever valor3 = valor3 + valor4; 
console.log(valor3); //resultado é 7, pois está somando valor3 + valor4 (5+2) e atribuindo o resultado ao valor3, que é o mostrado no console. O mesmo ocorre para "-="; "*="; "/=";


//Operadores de Sequência (concatenação)

var valor5, valor6, total2;
valor5 = "Fabiano";
valor6 = "Apoliano";

total2 = valor5 + valor6; //operador para juntar duas strings;
console.log(total2);


//Operadores de Comparação: "=="; "==="; "!="; "!=="; "<"; ">"; "<="; ">=";

var valor7, valor8, total3, total4, total5, total6;
valor7 = 8;
valor8 = "8";

total3 = (valor7 == valor8); //compara se valor7 é igual a valor8. Resultado: true;
total4 = (valor7 === valor8); //compara se o valor e o tipo (numeral ou string) são iguais. Resultado: false;
total5 = (valor7 != valor8); //compara se valor7 e valor8 são diferentes (não igual). Resultado: false;
total6 = (valor7 >= valor8); //compara se é maior ou igual. Resultado: true;
console.log(total3, total4, total5, total6); //retorna valor True ou False;


//Operador Condicional (ternário): "?"; ":";

var idade, eleitor;
idade = 18;
eleitor = (idade>=18) ? "É eleitor" : "Não é eleitor";
//         Condição        true           false
// entre parenteses a condição, depois do "?" valor verdadeiro, depois do ":" valor falso;

console.log(eleitor); //retorna o valor verdadeiro ou o valor falso. Resultado: É eleitor;


//Operador lógico (mais de uma condição):"&&"; "||"

var idade1, eleitor1;
idade1 = 75;
eleitor1 = (idade1 < 18 || idade1 > 70) ? "Não é eleitor" : "É eleitor"; 
//                 Condição                   true             false
//operador "||" significa "ou" e  operador "&&" significa "e";
//"!" é simbolo de negação, se estiver fora da condição (dos parênteses), significa negação da condição;

console.log(eleitor1); //se a idade estiver entre 18 e 70, retorna o valor. Resultado: Não é eleitor; 


                            /*Anotações da aula 3 de JavaScript.*/


//Funções: é como uma pequena "fábrica" onde se tem uma entrada e ele retorna uma saída;

function realParaDolar(real, cotacaoDoalr){ //função de cotação de dolar
    return real / cotacaoDoalr;
}

var totalEmDola = realParaDolar (1800, 4.96)
console.log(totalEmDola);


//Objetos: variáveis com muitos valores dentros. Os valores dentro de objetos são chamados "propriedades". Ex.: const carro = {marca:"Ford", modelo:"Ka", ano:2015};
//Objetos também podem conterm métodos. Métodos são funções colocadas dentro de uma propriedade.

const carro ={
    marca:"Ford",
    modelo:"Ka",
    ano:2015,
    buzina: function() {console.log("BiBi")}, //método dentro do objeto
    informacaoCompleta: function(){
        return "A marca é: " + this.marca + ". O modelo é: " + this.modelo + "."; //this serve para chamar a propriedade que esteja dentro do objeto;
    }
    };
//objeto carro tem propriedades (marca, modelo, ano) e métodos (buzina). Obs.: por convenção, se usa const para objetos;

console.log(carro.marca); //retorna apenas a propriedade marca;
carro.buzina(); //retorna o método buzina;
console.log(carro.informacaoCompleta()); //retorna o método informacaoCompleta;


//Eventos: ações disparadas pela interação do usário na página. São os eventos que tornam a página interativa e dinâmica;
/*
Exemplos:
    onclick -> disparada quando recebe um click;
    ondblclick - > disparado quando clique duplo;
    onmouseover -> disparado quando o mouse está sobre o elemento;
    onmouseout -> disparado quando o mouse é movido para fora do elemento;
    onmousedown -> disparado quando o clique do botão for pressionado;
    onmouseup -> disparado quando o clique do botão é liberado;
    onchange -> disparado quando o conteúdo é alterado;
    onload -> disparado quando a página termina de ser carregada;
    onresize -> disparado quando a janela é redimencionada;
*/


                            /*Anotações da aula 3 de JavaScript.*/














