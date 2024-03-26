console.log("Hello Word.")


                            /*Anotações da aula 7 de JavaScript.*/


//Switch - > usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação. Caso a condição não seja compatível, não será executada e o valor padrão será acionado. 

/*Exemplo de declaração do switch

switch (expressão) { //passa a expressão condicional
    case a:
        //o que acontece
        break;
    case b:
        //o que acontece
        break;
    case c:
        //o que acontece
        break;
    default:
        // o que acontece caso nenhuma das outras condiçoes tenham sido atingidas
}

*/

function verificaCor(){
    let cor = document.getElementById("cor").value; //lê o que for escrito no input do HTML
    cor = cor.toLowerCase(); //transforma tudo o que for escrito em letras minúsculos

//bs.: o switch é literal, só funciona se o parâmetro for exatamente igual ao que for fornecido, por isso fizemos com que todas as letras fossem transformadas em minúsculo.

switch (cor){
    case "azul":
        document.body.style.backgroundColor = "blue";
        break;
    case "vermelho":
        document.body.style.backgroundColor = "red";
        break;
    case "amarelo":
        document.body.style.backgroundColor = "yellow";
        break;
    default:
        document.body.style.backgroundColor = "black";
}

}