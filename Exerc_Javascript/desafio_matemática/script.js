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
            var s = txtn1 + txtn2
            res.innerHTML = `A <b>soma</b> entre <b>${txtn1}</b> e <b>${txtn2}</b> temos o resultado:<b>${s}</b>`
        } else if (mat == "subtrair"){
            alert("ok!")
        }
    }
}