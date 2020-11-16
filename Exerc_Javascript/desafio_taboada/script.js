//var num = prompt("Quer saber a taboada de qual número?")
var tab = document.querySelector("div#tabMat")
var bot = document.querySelector("p#bot")
var res = document.querySelector("div#res")
tab.addEventListener('mouseenter' , entrar)
tab.addEventListener('mouseout' , sair)
bot.addEventListener('click' , clicar)

    function entrar(){
        tab.innerHTML = `Calcularemos entao a Taboada: ${num}`
    }
    function sair(){
        tab.innerHTML = "Que tal tentar resolver a taboada mentalmente primeiro?"
    }
    function clicar(){
        for (var cont=0; cont <= 10; cont ++){
            var cal = Number(num*cont)
            res.innerHTML = `${num} x ${cont} = ${cal}`
        }
    }