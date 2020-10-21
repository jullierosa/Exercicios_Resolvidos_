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
    res.innerHTML = (`<b>A distância de <i>${metros}metros</i>, corresponde a: ${n1}Km; ${n2}Hm; ${n3}Dam; ${n4}Dm; ${n5}Cm; ${n6}mm;</b>`)
}