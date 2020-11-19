function verificar(){
    var txtn1 = window.document.querySelector("input#txtn1")
    var txtcasa = window.document.querySelector("input#txtcasa")
    var txtsal = window.document.querySelector("input#txtsal")
    var txtanos = window.document.querySelector("input#txtanos")
    var res = window.document.querySelector("div#res")

    var vf = parseFloat(txtsal * 0.3)
    if (pres < vf){
        res.innerHTML = `<b>${txtn1}</b> seu empréstimo foi <b>NEGADO</b>`
    }else{
        res.innerHTML = `<b>${txtn1}</b> seu empréstimo foi <b>APROVADO</b>`
    }
}