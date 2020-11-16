//var num = prompt("Quer saber a taboada de qual número?")
//alert('Passe o mouse por cima da palavra TABOADA')
var tab = document.querySelector("div#tabMat")
var res = document.querySelector("div#res")
tab.addEventListener('mouseenter' , entrar)
tab.addEventListener('mouseout' , sair)

    function entrar(){
        tab.innerHTML = `Calcularemos entao a Taboada: ${num}`
    }
    function sair(){
        tab.innerHTML = "Que tal tentar resolver a taboada mentalmente primeiro?"
    }

    function calcular(){
        for (c=1; c <= 10; c++){
            var resp = 9*c
            res.innerHTML = `9x ${c} = ${resp}`
        }
    }