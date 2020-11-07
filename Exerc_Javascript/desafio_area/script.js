function calcular(){
    var txtn1 = document.querySelector("input#txtn1")
    var txtn2 = document.querySelector("input#txtn2")
    var res = document.querySelector("div#res")
    var txtn1 = Number(txtn1.value)
    var txtn2 = Number(txtn2.value)
    var area = parseFloat(txtn1*txtn2)
    var tinta = parseFloat(area/2)
    res.innerHTML = `A área a ser pintada que contém ${txtn1} de altura e ${txtn2} de largura e gastará ${tinta} litros de tinta`
}