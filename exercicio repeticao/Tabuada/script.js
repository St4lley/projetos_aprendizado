function gerar() {
    var numero = document.getElementById('txtn').value
    var tabela = document.getElementById ('seltab')
    //var ret = document.getElementById('ret')

    if (numero.length === 0){
        alert('Insira um numero valido!!') 
    }else {
        var n = Number(numero)
        var c = 1
        tabela.innerHTML = ''
        while (c<= 10){
            var item = document.createElement('option')
            item.text += `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tabela.appendChild(item)
            c ++
        }
            
    }
}