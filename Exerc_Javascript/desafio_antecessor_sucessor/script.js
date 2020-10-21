function clicar(){
    var desafio = document.querySelector("div#desafio")
    var n1 = prompt("Digite um número qualquer:")
    var sub = n1 - 1
    var soma = n1 + 1
    var res = alert(`Antes de ${n1}, temos o antecessor ${sub} e o sucessor ${soma}`)
}