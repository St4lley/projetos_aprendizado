
var txt = document.getElementById('txt')

 function contar() {
    var inicio = Number(document.getElementById("inicio").value)
    var fim = Number(document.getElementById('fim').value)
    var passos = Number(document.getElementById('passos').value)
    if (inicio.length === 0||fim.length === 0||passos.length === 0){
        txt.innerText = 'ERRO!! '
        alert('insira um valor')
        

    }else if(passos <= 0) {
        txt.innerText = 'INSIRA UM VALOR VALIDO'
        alert('passos invalido!! valor minimo de 1')
        passos = 1

        let contador = inicio
        txt.innerHTML = `contando : <br> `
        if(inicio < fim){
            
            while (contador<= fim){
                txt.innerText += ` ${contador} \u{1f449}`
                contador += passos  
            }
            
            
        }else {
            
            while (contador>= fim){
                txt.innerText += ` ${contador} \u{1f449}`
                contador -= passos  
            }
        }
        
    } else {

        let contador = inicio
        txt.innerHTML = `contando : <br> `
        if(inicio < fim){
            
            while (contador<= fim){
                txt.innerText += ` ${contador} \u{1f449}`
                contador += passos  
            }
            
            
        }else {
            
            while (contador>= fim){
                txt.innerText += ` ${contador} \u{1f449}`
                contador -= passos  
            }
            
        }txt.innerText += `\u{1f3c1}`
    }
    
    
 }

