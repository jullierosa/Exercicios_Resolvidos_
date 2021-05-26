var nome = alert("Olá, Bem Vindo!")
var sort_int;
var sort_out = "";
var num_int;
var num_out = "";
var a = "ERRO! DIGITE UM TEXTO";


function sort_to_numr(form) {
    num_out = "";
    if (form.input.value == "") alert(a);
    else {
        sort_int = escape(form.input.value);
        for(o = 0; o < sort_int.length; o++) {
            num_out += sort_int.charCodeAt(o) - 23; 
        }
        form.output.value = num_out;
        form.input.value = "";
    }
}  

function numr_to_sort(form) {
    sort_out = "";
    if(form.output.value == "") alert(a)
    else {
        num_out = form.output.value;
        for(o = 0; o < num_out.length; o+=2) {
            num_int = parseInt(num_out.substr(o,[2])) + 23;
            num_int = unescape('%' + num_int.toString(16));
            sort_out += num_int;
        }
        form.input.value = unescape(str_out);
        form.output.value = "";
    }
}
// --->>