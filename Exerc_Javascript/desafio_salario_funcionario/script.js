function verificar (){
    var txtn1 = window.document.querySelector("input#txtn1")
    var txtn2 = window.document.querySelector("input#txtn2")
    var txtn3 = window.document.querySelector("input#txtn3")
    var res = window.document.querySelector("div#res")
    var txtn1 = String(txtn1.value)
    var txtn2 = Number(txtn2.value)
    var txtn3 = Number(txtn3.value)
    var res1 = parseFloat(txtn2 * 0.03)
    var res2 = parseFloat(txtn2 * 0.12)
    var res3 = parseFloat(txtn2 * 0.20)
    if (txtn3 <= 3){
        var resf = res1 + txtn2
        res.innerHTML = `<i>${txtn1}</i>, o seu salário era <b>${txtn2} reais </b> e passou para <b>${resf} reais</b> devido ao seu tempo de casa que é de <i>${txtn3} anos</i> e você ganhou um aumento de 3%`
    }else if (txtn3 <= 10){
        var resf1 = res2  + txtn2
        res.innerHTML = `<i>${txtn1}</i>, o seu salário era <b>${txtn2} reais </b> e passou para <b>${resf1} reais</b> devido ao seu tempo de casa que é de <i>${txtn3} anos</i> e você ganhou um aumento de 12%`
    }else{
        var resf2 = res3 + txtn2 
        res.innerHTML = `<i>${txtn1}</i>, o seu salário era <b>${txtn2} reais </b> e passou para <b>${resf2} reais</b> devido ao seu tempo de casa que é de <i>${txtn3} anos</i> e você ganhou um aumento de 20%`
    }
}