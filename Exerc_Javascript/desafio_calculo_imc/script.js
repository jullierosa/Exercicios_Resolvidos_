function calcular(){
    var tnom = document.querySelector("input#tnom")
    var tpeso = document.querySelector("input#tpeso")
    var talt = document.querySelector("input#talt")
    var res = document.querySelector("div#res")
    var tnom = String(tnom.value)
    var tpeso = Number(tpeso.value)
    var talt = Number(talt.value)
    var imc = parseFloat(tpeso/talt**2)
    if (imc < 18.5){
        res.innerHTML = `${tnom}, você está <b>abaixo do peso</b><br>`
    }else if (imc < 25){
        res.innerHTML = `${tnom}, você esta no seu <b>peso ideal</b><br>`
    }else if (imc < 30){
        res.innerHTML = `${tnom}, você está com <b>sobrepeso</b><br>`
    }else if (imc < 40){
        res.innerHTML = `${tnom}, voce esta com <b>obesidade</b><br>`
    }else {
        res.innerHTML = `${tnom}, você está com <b>obesidade mórbida</b><br>`
    }
    res.innerHTML += `<b>NÃO ESQUEÇA DE SE CUIDAR</b>`
}