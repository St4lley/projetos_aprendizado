

function verificar() {
    var anoAtual = new Date().getFullYear()
    var anonasc = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (anonasc.value.length === 0 || Number(anonasc.value) > anoAtual){
        alert('revise os dados informados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(anonasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'HOMEM'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','caminho da foto')
                //crianca
            }else if (idade < 21) {
                //jovem
            }


        }else if (fsex[1].checked) {
            genero = 'MULHER'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} e tem ${idade} anos! `
        res.appendChild(img)
        
    }
}