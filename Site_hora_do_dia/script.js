
function carregar() {
    var msg = document.querySelector('div#msg')
    var msg2 = document.getElementById('msg2')
    var foto = document.getElementById('imagem')
    //var data = new Date()
    var hora = new Date().getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12){
        //bom dia
        foto.src = 'imagem/bom dia.gif'
        msg2.innerHTML = '<strong>BOM DIA!!</strong>'
        document.body.style.background = "blue"
    } else if (hora >=12 && hora < 18) {
        //boa tarde
        foto.src = 'imagem/boa tarde.gif'
        msg2.innerHTML = '<strong>BOA TARDE!!</strong>'
        document.body.style.background = "yellow"
    } else {
        //boa noite
        foto.src = 'imagem/boa noite.gif'
        msg2.innerHTML = '<strong>BOA NOITE!!</strong>'
        document.body.style.background = "black"
    }
} 