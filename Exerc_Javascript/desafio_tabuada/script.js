var num = prompt("Quer saber a tabuada de qual número?")//reserva o numero 
alert('antes de qualquer coisa, passe o mouse por cima da palavra TABUADA')
var tab = document.querySelector("div#tabMat")
var res = document.querySelector("div#res")
tab.addEventListener('mouseenter' , entrar)//mouse entrar na div
tab.addEventListener('mouseout' , sair)//mouse sair da div

    function entrar(){
        //funçao mouseenter
        tab.innerHTML = `Calcularemos entao a Tabuada: ${num}`
    }
    function sair(){
        //função mouseout
        tab.innerHTML = "Que tal tentar resolver a tabuada mentalmente primeiro?"
    }

    function calcular(){
        //função calcular tabuada
        for (var c=0; c <= 10; c++){ 
           document.write(`<i>${num} x ${c} = ${num*c}</i><br>`)
        }
        document.write("<p><b>Atualize para voltar a página principal</b></p>")
    }