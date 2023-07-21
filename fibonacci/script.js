function gerar() {
    var retorno = document.getElementById('ret')
    var num = Number(document.getElementById('txtn').value)
    var txt = document.getElementById('txt')

    retorno.innerHTML = `O numero é ${num} `

    if (num === 0){
        alert('insira um numero valido!!')
    }

    var n1 = 0
    var n2 = 1
    var c = 0
    txt.innerHTML = 'Sequencia ='

    while (n1 < num && n2 < num ){
        txt.innerHTML += `${n1},${n2},`
        n1 = n1 + n2
        n2 = n2 + n1
    }
    if (n1 < num){
        txt.innerHTML += `${n1}`

    } else if (n2 < num) {
        txt.innerHTML += `${n2},`

    }
    
}
//=0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597