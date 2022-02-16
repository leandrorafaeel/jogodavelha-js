let btnJogar = document.querySelector(".btn-jogar");
let boxes = document.querySelectorAll('.box');
let x = document.querySelector(".x");
let o = document.querySelector(".o");

let player1 = 0;
let player2 = 0;

//evento que esconde o botao e mostra o jogo depois de 1 segundo
btnJogar.addEventListener("click", function(){
    this.classList.add("hide");
    setTimeout(() => {
        document.querySelector("#jogo").classList.remove("hide")
        document.querySelector(".jogadores").classList.remove("hide")
    }, 1000);
});

//pegando todos os boxes
for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", function(){
        //se não tiver nenhum elemento dentro do box então chamar a funcao checkPlayer
        if(boxes[i].childNodes.length == 0){
            //checando os jogadores
            let el = checkPlayer(player1, player2);

            //clonando os elementos
            let cloneEl = el.cloneNode(true);

            //inserindo os elementos dentro do box
            this.appendChild(cloneEl);

            //computando as jogadas
            if(player1 == player2){
                player1++
            }
            else{
                player2++
            }     

            //chamando a funcao que verifica o vencedor
            checkVencedor()
        }

    });
}

//funcao checa a vez de quem vai jogar
function checkPlayer(player1, player2){
    if(player1 == player2){
        el = x;
    }
    else{
        el = o;
    }
    return el;
}

//funcao que checa as jogadas e mostra o vencedor
function checkVencedor(){
    let b1 = document.querySelector("#block-1");
    let b2 = document.querySelector("#block-2");
    let b3 = document.querySelector("#block-3");
    let b4 = document.querySelector("#block-4");
    let b5 = document.querySelector("#block-5");
    let b6 = document.querySelector("#block-6");
    let b7 = document.querySelector("#block-7");
    let b8 = document.querySelector("#block-8");
    let b9 = document.querySelector("#block-9");

    //jogadas na horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == "x" && b2Child == "x" && b3Child == "x"){
            vencedor('x');
        }
        else if(b1Child == "o" && b2Child == "o" && b3Child == "o"){
            vencedor('o');
        }

    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == "x" && b5Child == "x" && b6Child == "x"){
            vencedor('x');
        }
        else if(b4Child == "o" && b5Child == "o" && b6Child == "o"){
            vencedor('o');
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == "x" && b8Child == "x" && b9Child == "x"){
            vencedor('x');
        }
        else if(b7Child == "o" && b8Child == "o" && b9Child == "o"){
            vencedor('o');
        }
    }

    
    //jogadas na vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == "x" && b4Child == "x" && b7Child == "x"){
            vencedor('x');
        }
        else if(b1Child == "o" && b4Child == "o" && b7Child == "o"){
            vencedor('o');
        }

    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == "x" && b5Child == "x" && b8Child == "x"){
            vencedor('x');
        }
        else if(b2Child == "o" && b5Child == "o" && b8Child == "o"){
            vencedor('o');  
        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == "x" && b6Child == "x" && b9Child == "x"){
            vencedor('x');
        }
        else if(b3Child == "o" && b6Child == "o" && b9Child == "o"){
            vencedor('xo');
        }
    }
    
    //jogadas na diagonal
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == "x" && b5Child == "x" && b9Child == "x"){
            vencedor('x');
        }
        else if(b1Child == "o" && b5Child == "o" && b9Child == "o"){
            vencedor('o');
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == "x" && b5Child == "x" && b7Child == "x"){
            vencedor('x');
        }
        else if(b3Child == "o" && b5Child == "o" && b7Child == "o"){
            vencedor('o');
        }
    }

    //caso nenhum fos jogadores ganhe e der velha
    let contador = 0;
    for(let x = 0; x < boxes.length; x++){
        if(boxes[x].childNodes[0] != undefined){
            contador++;
        }
        if(contador == 9){
            vencedor('deu velha');
        }
    }

    //limpa o jogo e mostra o vencedor
    function vencedor(winner){
        let scoreX = document.querySelector(".placar-1")
        let scoreO = document.querySelector(".placar-2")
        let mensagem = document.querySelector(".mensagem")
        let msg = ""

        if(winner == "x"){
            scoreX.textContent = parseInt(scoreX.textContent) + 1;
            msg = 'O Jogador 1 é o vencedor!'
        }
        else if(winner == "o"){
            scoreO.textContent = parseInt(scoreO.textContent) + 1;
            msg = 'O Jogador 2 é o vencedor!'
        }
        else {
            msg = 'Deu Velha!'
        }

        //mostrando a mensagem de vencedor
        mensagem.textContent = msg;
        mensagem.classList.remove("hide")

        //escondendo a mensagem depois de 3 segundos
        setTimeout(() => {
            mensagem.classList.add("hide")
        }, 2000);

        //limpando o tabuleiro
        let limparBoxes = document.querySelectorAll(".box span");
        for(let i = 0 ; i < limparBoxes.length; i++){
            limparBoxes[i].parentNode.removeChild(limparBoxes[i])
        }
    }

}
