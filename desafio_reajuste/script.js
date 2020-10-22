function calcular(){
    var sal = document.querySelector("div#sal")
    var res = document.querySelector("div#res")
    var nome = prompt("Qual é o nome do(a) funcionário(a)?")
    var salar = prompt(`Qual é o salário de ${nome}?`)
    var porc = prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)
    var Vporc = parseFloat(porc/100)
    var val = parseFloat(salar*Vporc)
    var vf = parseFloat(Number(salar)+val)
    res.innerHTML = (`<b>${nome} recebeu um aumento salarial</b></br>`)
    res.innerHTML += (`O salário atual era <b>R$${salar},00</b></br>`)
    res.innerHTML += (`Com um aumento de <b>${porc}%</b>, o salário vai aumentar <b>R$${val},00</b> no próximo mês.</br>`)
    res.innerHTML += (`E a partir daí, <b>${nome}</b> vai passar a ganhar <b>R$${vf},00 reais</b>`)
   
}