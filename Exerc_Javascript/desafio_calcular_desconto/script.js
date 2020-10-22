function calcular(){
    var desc = document.querySelector("div#desc")
    var res = document.querySelector("div#res")
    var nome = prompt("Qual é o produto que você está comprando?")
    var preco = prompt(`Qual é o preço do(a) ${nome}?`)
    var porc = parseFloat(preco*0.10)
    var des = parseFloat(preco - porc)
    res.innerHTML = (`O preço original era <b>R$${preco},00 reais</b> </br>`)
    res.innerHTML += (`Você acaba de ganhar <b>R$${porc},00 reais de desconto</b> que é de <b>10%</b> </br>`)
    res.innerHTML += (`No fim, você vai pagar <b>R$${des},00 reais</b> no produto comprado, o(a) <b>${nome}</b>.`)  
     
}