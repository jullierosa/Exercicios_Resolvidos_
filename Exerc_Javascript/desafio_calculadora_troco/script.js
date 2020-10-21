var nomes = prompt("Antes de qualquer coisa, qual é o seu nome?")
alert(`Olá ${nomes}!`)
function calcular(){
    var calc = document.querySelector("div#calc")
    var nome = prompt(`${nomes}, qual é o(a) nome do produlto que você está comprando?`)
    var preco = prompt(`Quanto custa o(a) ${nome} que está comprando?`)
    var valor = prompt(`Qual valor você deu para pagar o(a) ${nome}`)
    var resul = Number(valor - preco)
    var fim = alert(`${nomes}, você comprou o(a) ${nome} que custou R$:${preco},00. Você deu R$: ${valor},00 em dinheiro e receberá de troco o valor de R$: ${resul},00 reais. ${nomes}, Obrigada e volte sempre!`)
}