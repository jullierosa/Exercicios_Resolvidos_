var nome = prompt("Olá, qual é o seu nome?")
alert(`Bem-Vindo, ${nome}!`)
function contar(){
    var txti = document.querySelector("input#txti")
    var txtf = document.querySelector("input#txtf")
    var txtp = document.querySelector("input#txtp")
    var res = document.querySelector("div#res")
    if(txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0){
        alert("ERRO, FALTAM DADOS")
    } else {
        res.innerHTML = (`Contando...`)
        var txti = Number(txti.value)
        var txtf = Number(txtf.value)
        var txtp = Number(txtp.value)
        if(txti < txtf){
            //Contagem crescente
            for(var cont = txti; cont <= txtf; cont+=txtp){
                res.innerHTML += `<b>${cont}</b> \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for(var cont = txti; cont >= txtf; cont-=txtp){
                res.innerHTML += `<b>${cont}</b> \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`//emogi
        res.innerHTML += `<br><b>${nome}, volte sempre!</b>`

    }

}