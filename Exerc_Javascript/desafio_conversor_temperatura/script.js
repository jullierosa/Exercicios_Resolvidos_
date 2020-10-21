function converter(){
    var temp = document.querySelector("div#temp")
    var res = document.querySelector("div#res")
    var grau = prompt("Digite uma temperatura em C(celsius)")
    var fa = parseFloat(Number(((grau*9)/5)+32))
    var kel = parseFloat(Number(grau)+273)
    res.innerHTML = `<b>A temperatura de ${grau}C, corresponde a...</b></br>`
    res.innerHTML += `${kel} KELVIN</br>`
    res.innerHTML += `${fa} FAHRENHEIT`
}