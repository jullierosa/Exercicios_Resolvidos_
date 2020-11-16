const tab = document.querySelector('p')
tab.addEventListener('click' , atualizarTab)
    function atualizarTab(){
        var num = prompt("Quer saber a taboada de qual número?")
        tab.textContent = 'Taboada: ' + num
    }