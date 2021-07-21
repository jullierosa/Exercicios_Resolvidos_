var nome = prompt("Antes de qualquer coisa, qual o seu nome?")
alert(`Olá ${nome}!`)
function calcular(){
    var calc = document.querySelector("div#calc")
    var res = document.querySelector("div#res")
    var prod = prompt(`${nome}, qual é o produlto que você está comprando?`)
    var preco = prompt(`Quanto custa o(a) ${prod} que está comprando?`)
    var valor = prompt(`Qual valor que você deu para pagar o(a) ${prod}`)
    var resul = Number(valor - preco)
    var fim = alert(`${nome}, você comprou o(a) ${prod} que custou R$:${preco}. Você deu R$: ${valor},00 em dinheiro e receberá de troco o valor de R$: ${resul} reais.`)
    res.innerHTML = `<p><b>${nome}</b> obrigada e volte sempre!</p>`
}