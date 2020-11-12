function criarParagrafo(){
    var para = document.createElement('p');
    para.textContent = 'Você clicou no botão!';
    document.body.appendChild(para);
}