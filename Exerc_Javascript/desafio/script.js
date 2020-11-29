function calcular(){
    var cont = 1
    var s = 0
    while (cont <= 5){
      var num = prompt("Digite um número: ")
      var s = (s + num)
      cont = cont + 1
    }
    res.innerHTML = `A soma dos valores é ${s}`
}