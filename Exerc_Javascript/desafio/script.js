function contar(){
    var txti = document.querySelector("input#txti")
    var txtf = document.querySelector("input#txtf")
    var txtp = document.querySelector("input#txtp")
    var res = document.querySelector("div#res")
    if(txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0){
        alert("ERRO, FALTAM DADOS")
    } else {
        var cont = txti
       while(cont <= txtf){
           alert("ok")
       }
    }
}