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
        res.innerHTML = `<p>${tnom}, você está <b>abaixo do peso</b></p><br>`
    }else if (imc < 25){
        res.innerHTML = `<p>${tnom}, você esta no seu <b>peso ideal</b></p><br>`
    }else if (imc < 30){
        res.innerHTML = `<p>${tnom}, você está com <b>sobrepeso</b></p><br>`
    }else if (imc < 40){
        res.innerHTML = `<p>${tnom}, voce esta com <b>obesidade</b></p><br>`
    }else {
        res.innerHTML = `<p>${tnom}, você está com <b>obesidade mórbida</b></p><br>`
    }
    res.innerHTML += `<p><b>NÃO ESQUEÇA DE SE CUIDAR</b></p>`
}