function clicar(){
    var desafio = document.querySelector("div#desafio")
    var res = document.querySelector("div#res")
    var n1 = prompt("Digite um número qualquer:")
    var ant = parseInt(Number(n1)-1)
    var suc = parseInt(Number(n1)+1)
    res.innerHTML = `<p>${n1} <b>Antecessor</b>:${ant}</p><br>`
    res.innerHTML += `${n1} <b>Sucessor</b>:${suc}`
}