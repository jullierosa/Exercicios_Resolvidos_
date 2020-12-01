function calcular(){
    var txtn1 = document.querySelector("input#txtn1")
    var res = document.querySelector("div#res")
    var txtn1 = Number(txtn1.value)
    var resp = txtn1%4
    var resF = txtn1%400
    if (resp == 0 && resF == 0){
        res.innerHTML = `<p>Ano Bissexto</p>`
    } else {
        res.innerHTML = `<p>Ano não Bissexto</p>`
    }
}