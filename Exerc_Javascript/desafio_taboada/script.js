var num = prompt("Quer saber a taboada de qual número?")
var tab = document.querySelector("div#tabMat")
tab.addEventListener('mouseenter' , atTab)
    function atTab(){
        tab.innerHTML = `Calcularemos entao a Taboada: ${num}`
    }
    function calcular() {
        var res = document.querySelector("div#res")
        for(var cont = 0; cont <= 10;cont ++){
            res.innerHTML = `${num} x ${cont} = ${resp}`
        }
    }4