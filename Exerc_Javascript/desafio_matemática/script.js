var mat = prompt(String("Você quer somar, subtrair, multiplicar ou dividir?"))
function calcular(){
    var txtn1 = document.querySelector("input#txtn1")
    var txtn2 = document.querySelector("input#txtn2")
    var res = document.querySelector("div#res")
    if (txtn1.value.length == 0 || txtn2.value.length == 0){
        alert("ERRO, FALTAM DADOS!")
    } else {
        var txtn1 = Number(txtn1.value)
        var txtn2 = Number(txtn2.value)
        res.innerHTML = `<b>Vamos <i>${mat}</i></b> \u{1F3C1}`
        if(mat == "somar"){
            //soma
            var cal = txtn1 + txtn2
            res.innerHTML += `<br>\u{1F449} <b>${txtn1} + ${txtn2} : ${cal}</b>`
        } else if (mat == "subtrair"){
            //subtração
            var cal = txtn1 - txtn2
            res.innerHTML += `<br>\u{1F449} <b>${txtn1} - ${txtn2} : ${cal}</b>`
        } else if (mat == "multiplicar"){
            //multiplicação
            var cal = txtn1 * txtn2
            res.innerHTML += `<br>\u{1F449} <b>${txtn1} * ${txtn2} : ${cal}</b>`
        } else {
            //divisão
            var cal = parseFloat(txtn1/txtn2)
            res.innerHTML += `<br>\u{1F449} <b>${txtn1} / ${txtn2} : ${cal}</b>`
        }
    }
}