function calcular(){
    var txti = document.querySelector("input#txti")
    var txtf = document.querySelector("input#txtf")
    var txtp = document.querySelector("input#txtp")
    var res = document.querySelector("div#res")
    var txti = Number(txti.value)
    var txtf = Number(txtf.value)
    var txtp = Number(txtp.value)
    for (var c= txti; c <= txtf; c++){
       res.innerHTML = `${c}`
    }
}