function calcular() {
    var data = new Date()
    var ano  = data.getFullYear()
    var txtn = document.querySelector("input#txtn")
    var txtano = document.querySelector("input#txtano")
    var res = document.querySelector("div#res")
    var txtn = String(txtn.value)
    if (txtano.value.length == 0 || Number(txtano.value) > ano) {
        window.alert("ERRO, VERIFIQUE OS DADOS E TENTE NOVAMENTE")
    } else {
        var tsex = document.getElementsByName('tsex')
        var idade = Number(ano - txtano.value)
        if (tsex[0].checked) {
            if (idade >=0 && idade < 10){
                res.innerHTML = `Detectamos uma <b>CRIANÇA</b> com ${idade} anos`
            } else if (idade < 21) {
                res.innerHTML = `Detectamos um <b>JOVEM</b> com ${idade} anos`
            } else if (idade < 50) {
                res.innerHTML = `Detectamos um <b>HOMEM ADULTO</b> com ${idade} anos`
            } else {
                res.innerHTML = `Detectamos um <b>IDOSO</b> com ${idade} anos`
            }
        } else if (tsex[1].checked) {
            if (idade >=0 && idade < 10){
                res.innerHTML = `Detectamos uma <b>criança</b> com ${idade} anos`
            } else if (idade < 21){
                res.innerHTML = `Detectamos uma <b>JOVEM</b> com ${idade} anos`
            } else if (idade < 50){
                res.innerHTML = `Detectamos uma <b>MULHER ADULTA</b> com ${idade} anos`  
            } else {
                res.innerHTML = `Detectamos uma <b>IDOSA</b> com ${idade} anos`
            }
        }
    }
    res.innerHTML += `<p><br><b>${txtn}, obrigada pela sua atenção!</b></p> `
}