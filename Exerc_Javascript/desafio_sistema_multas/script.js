function calcular(){
    var tnom = document.querySelector("input#tnom")
    var tvel = document.querySelector("input#tvel")
    var res = document.querySelector("div#res")
    var tnom = String(tnom.value)
    var tvel = Number(tvel.value)
    if (tvel <= 60){
        res.innerHTML = `<p>${tnom}, sua velocidade foi de ${tvel}km/h.<br></p>`
    } else {
        var s = parseFloat((tvel-60)*5)
        res.innerHTML = `<p>${tnom}, você pagará ${s} reais de multa devido a ultrapassagem do limite de velocidade de <b>60km/h</b></p><br>`
    }
    res.innerHTML += `<p><b>OBRIGADA!USE SEMPRE CINTO DE SEGURANÇA</b></p>`
}