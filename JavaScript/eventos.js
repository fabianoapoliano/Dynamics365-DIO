                            /*Anotações da aula 4 de JavaScript.*/

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

//aqui começam os estudos junto com o index.html

alert('Hello Word');

//caminho relativo e caminho absoluto (verificar como utilizar no HTML)****

function eventoClick (){
    alert('Evento de click simples.'); //ao clicar no botão vai aparecer 'Função de click'
    document.body.style.backgroundColor="yellow"; //muda, também, a cor de fundo
//dentro da mesma função aparece o alerta e muda a cor
//podem ser feitas diversas ações dentro da função
}

function eventoDblClick (){
    alert ('Evento de click duplo.');
    document.body.style.backgroundColor="red";
//função acionada quando clicado duas vezes no botão
}

function eventoOnMouseOut (){
    let mudaCor = document.getElementById("testeMouse"); 
//criada uma variável (let) chamada 'mudaCor' para receber tudo que está dentro do elemento 'testeMouse' no HTML. Isto é, a variável 'mudaCor' recebe todo o style da (div id="testeMouse") do HTML
mudaCor.style.backgroundColor="black";
//aqui serve para mudar a cor de fundo do estilo da variável 'mudaCor'
}

function eventoOnMouseOver(){
    let mudaCor = document.getElementById("testeMouse");
    mudaCor.style.backgroundColor="green";
//função parecida com a de cima, mas funciona quando o mouse está sobre o elemento.
}

//o resultado das duas funções é, quando o mouse estiver por cima fica verde, quando sair fica preto.