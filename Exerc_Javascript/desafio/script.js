function calcular(){
    var txti = document.querySelector("input#txti")
    var txtf = document.querySelector("input#txtf")
    var txtp = document.querySelector("input#txtp")
    var res = document.querySelector("div#res")
    var txti = Number(txti.value)
    var txtf = Number(txtf.value)
    var txtp = Number(txtp.value)
    var cont = 1
    while(cont <= 5){
        res.innerHTML = `passo ${cont}`
        cont = cont + 1
    }
}