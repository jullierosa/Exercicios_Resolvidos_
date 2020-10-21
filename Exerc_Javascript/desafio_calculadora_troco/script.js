function calcular(){
    var calc = document.querySelector("div#calc")
    var nome = prompt("Qual é o nome do produlto que está comprando?")
    var preco = prompt(`Quanto custa o ${nome} que está comprando?`)
    var valor = prompt(`Qual valor você deu para pagar o(a) ${nome}`)
    var resul = Number(valor - preco)
    var fim = alert(`Você compro o(a) ${nome} que custou R$:${preco},00. Você deu R$: ${valor},00 em dinheiro e receberá de troco o valor de R$: ${resul},00 reais.Obrigada e volte sempre!`)
}