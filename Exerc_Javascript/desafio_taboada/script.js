const tab = document.querySelector('p#tabMat')
tab.addEventListener('click' , atualizarTab)
    var num = prompt("Quer saber a taboada de qual número?")
    function atualizarTab(){
        tab.textContent = 'Taboada: ' + num
    }
    function inicio() {
        var res = document.querySelector("div#res")
        var cont = 0;
        var lim = 10;
            while(cont <= lim){
                var resp = num * cont
                res.innerHTML = `${num} x ${cont} = ${resp}`
                var cont = cont + 1
            }
    }