function converter(){
    var med = document.querySelector("div#med")
    var res = document.querySelector("div#res")
    var metros = prompt("Digite uma distância em METROS:")
    var n1 = parseFloat(Number(metros/1000))
    var n2 = parseFloat(Number(metros/100))
    var n3 = parseFloat(Number(metros/10))
    var n4 = parseFloat(Number(metros*10))
    var n5 = parseFloat(Number(metros*100))
    var n6 = parseFloat(Number(metros*1000))
    res.innerHTML = (`<b>A distância de <i>${metros}metros</i>, corresponde a:</br></br>`)
    res.innerHTML += (`> ${n1}<b>Km</b>;</br>`)
    res.innerHTML += (`> ${n2}<b>Hm</b>;</br>`)
    res.innerHTML += (`> ${n3}<b>Dam</b>;</br>`)
    res.innerHTML += (`> ${n4}<b>Dm</b>;</br>`)
    res.innerHTML += (`> ${n5}<b>Cm</b>;</br>`)
    res.innerHTML += (`> ${n6}<b>mm</b>;</br>`)

}