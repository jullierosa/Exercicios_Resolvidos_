var txtn1 = document.querySelector("input#txtn1")
var txtn2 = document.querySelector("input#txtn2")
var res = document.querySelector("div#res")
var mat = prompt("Você quer somar, subtrair, multiplicar ou dividir?")
function calcular(){
    if (txtn1.value.length == 0 || txtn2.value.length == 0){
        alert("ERRO, FALTAM DADOS!")
    } else {
        if(mat == "somar"){
            alert("ok!")
        }
    }
}