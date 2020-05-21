function contar() {
    var r = window.document.querySelector('p#resposta')
    var início = window.document.querySelector('input#cIni').value
    var fim = window.document.querySelector('input#cFim').value
    var passo = window.document.querySelector('input#cPas').value
    r.innerText = ''
    if(início.length != 0 && fim.length != 0 && passo.length != 0) {
        início = Number(início)
        fim = Number(fim)
        passo = Number(passo)
        if(passo == 0) {
            window.alert('Impossível contar com passo 0. Considerando passo 1')
            passo = 1
        }
        if(fim > início) {
            for(var i = início; i <= fim; i += passo) {
                r.innerHTML += String(`${i}.. `)
            }
        } else {
            for(var i = início; i >= fim; i -= passo) {
                r.innerHTML += String(`${i}.. `)
            }
        }
    } else {
        r.innerText = 'Impossível Contar'
    }
}