var Cdol = prompt("Antes de mais nada, quanto está a cotação do dólar hoje?")
var Ceuro = prompt("E a cotação do euro?")
function converter(){
    var conv = document.querySelector("div#conv")
    var res = document.querySelector("div#res")
    var dim = prompt("Quantos R$ você tem na carteira?")
    var respf = parseFloat(Number(dim/Cdol))
    var respf2 = parseFloat(Number(dim/Ceuro))
    res.innerHTML = (`Você conseguirá comprar <b>US$ ${respf} dolares</b> com <b>R$ ${dim},00 reais</b> que você tem na sua carteira, considerando a cotação do dolár que atualmente está a <b>US$ ${Cdol}dolares</b>.</br></br>`)
    res.innerHTML += (`E você também conseguirá comprar <b>E${respf2} euros</b> com <b>R$ ${dim},00 reais</b> que você tem na sua carteira, considerando também a cotação do euro que atualmente está a <b>E${Ceuro}euros</b>.</br><i>Obrigada</i>`)
}