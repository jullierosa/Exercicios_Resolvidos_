function clicar(){
    var desafio = document.querySelector("div#desafio")
    var n1 = prompt("Digite um número qualquer:")
    var ant = parseInt(Number(n1)-1)
    var suc = parseInt(Number(n1)+1)
    var res = alert(`Antes de ${n1}, temos o antecessor ${ant}. E após ${n1}, temos o sucessor ${suc}.`)
}