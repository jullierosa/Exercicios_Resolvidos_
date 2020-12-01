var nome = prompt("Olá! Qual seu nome?")
function calcular(){
    var txtn1 = document.querySelector("input#txtn1")
    var res = document.querySelector("div#res")
    var txtn1 = Number(txtn1.value)
    var resp = (txtn1%2)
    if (resp == 1){
        res.innerHTML = `${nome}, seu número é ÌMPAR`
    } else {
        res.innerHTML = `${}, seu número é PAR`
    }
    
}