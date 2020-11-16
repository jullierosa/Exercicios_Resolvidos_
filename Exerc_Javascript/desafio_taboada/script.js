var num = prompt("Quer saber a taboada de qual número?")
alert('antes de qualquer coisa, passe o mouse por cima da palavra TABUADA')
var tab = document.querySelector("div#tabMat")
var res = document.querySelector("div#res")
tab.addEventListener('mouseenter' , entrar)
tab.addEventListener('mouseout' , sair)

    function entrar(){
        tab.innerHTML = `Calcularemos entao a Tabuada: ${num}`
    }
    function sair(){
        tab.innerHTML = "Que tal tentar resolver a tabuada mentalmente primeiro?"
    }

    function calcular(){
        for (var c=1; c <= 10; c++){
           document.write(`${num} x ${c} = ${num*c}<br>`)
        }
    }