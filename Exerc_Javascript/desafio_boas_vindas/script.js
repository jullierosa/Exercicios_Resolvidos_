function clicar(){
    var desafio = document.querySelector("div#desafio")
    var nome = prompt("Qual é o seu nome?")
    var idade = prompt(`Olá ${nome}! Qual sua idade?`)
    alert(`Acabei de conhecer ${nome} que tem ${idade} anos de idade`)
}