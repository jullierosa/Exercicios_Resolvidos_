var mat = prompt(String("Você quer somar, subtrair, multiplicar ou dividir?"))
function calcular(){
    var txtn1 = document.querySelector("input#txtn1")
    var txtn2 = document.querySelector("input#txtn2")
    var res = document.querySelector("div#res")
    if (txtn1.value.length == 0 || txtn2.value.length == 0){
        alert("ERRO, FALTAM DADOS!")
    } else {
        res.innerHTML += ('Preparando a continha')
        if(mat == "somar"){
            var s = (Number(txtn1 + txtn2))
            prompt(`${s}`)
        }
    }
}