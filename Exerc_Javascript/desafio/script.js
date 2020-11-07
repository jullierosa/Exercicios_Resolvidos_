function calcular(){
    var txtn1 = document.querySelector("input#txtn1")
    var res = document.querySelector("div#res")
    var txtn1 = Number(txtn1.value)
    var dob = parseFloat(txtn1*2)
    var tri = parseFloat(txtn1/3)
    res.innerHTML = `O dobro de ${txtn1} é ${dob} <br>`
    res.innerHTML += `A terça parte de ${txtn1} é ${tri}`
}