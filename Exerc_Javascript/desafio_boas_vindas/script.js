function clicar(){
    var desafio = document.querySelector("div#desafio")
    var res = document.querySelector("div#res")
    var nome = prompt("Antes de qualquer coisa, qual é o seu nome?")
    var idade = prompt(`Olá ${nome}! Qual sua idade?`)
    res.innerHTML = `<p>Acabei de conhecer ${nome} que tem ${idade} anos de idade</p>`
}