function calcular(){
    var txti = document.querySelector("input#txti")
    var txtf = document.querySelector("input#txtf")
    var txtp = document.querySelector("input#txtp")
    var res = document.querySelector("div#res")
    var txti = Number(txti.value)
    var txtf = Number(txtf.value)
    var txtp = Number(txtp.value)
    if(txti.value == 0 || txtf.value == 0 || txtp.value == 0){
        alert("ERRO, FALTAM DADOS")
    } else {
        alert("ok")
    }
}