function clicar(){
    var desafio = document.querySelector("div#desafio")
    var res = document.querySelector("div#res")
    var nome = prompt("Antes de qualquer coisa, qual é o seu nome?")
    var idade = prompt(`Olá ${nome}! Qual sua idade?`)
    res.innerHTML = `<p>Acabei de conhecer <b>${nome}</b> que tem <b>${idade} </b> anos de idade</p>`
}