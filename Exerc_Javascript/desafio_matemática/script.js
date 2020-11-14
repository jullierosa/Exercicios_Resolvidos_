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
        if(mat == "somar"){
            //soma
            var s = txtn1 + txtn2
            res.innerHTML = `<b>Vamos <i>${mat}</i></b>`
            res.innerHTML += `<br><b>${txtn1} + ${txtn2} : ${s}</b>`
        } else if (mat == "subtrair"){
            //subtração
            var sub = txtn1 - txtn2
            res.innerHTML =  `<b>Vamos <i>${mat}</i></b>`
            res.innerHTML += `<br><b>${txtn1} - ${txtn2} : ${sub}</b>`
        } else if (mat == "multiplicar"){
            alert("ok!")
        }
    }
}