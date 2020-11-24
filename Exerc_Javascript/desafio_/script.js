alert("Digite o valor 1,2 e 3 e calcule o valor de Delta")
function calcular(){
    var txtn1 = document.querySelector("input#txtn1")
    var txtn2 = document.querySelector("input#txtn2")
    var txtn3 = document.querySelector("input#txtn3")
    var res = document.querySelector("div#res")
    var txtn1 = Number(txtn1.value)
    var txtn2 = Number(txtn2.value)
    var txtn3 = Number(txtn3.value)
    var resp = (txtn2**)-4*(txtn1*txtn3)
    res.innerHTML = `${resp}`
}