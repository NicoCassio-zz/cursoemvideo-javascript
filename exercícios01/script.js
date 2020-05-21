function carregar() {
    var hora = Number(new Date().getHours())
    var img = window.document.querySelector('p#foto')
    window.document.querySelector('p#msg').innerText = `Agora são ${hora} horas`
    if(hora>=0 && hora<12) {
        img.innerText = '[MANHÃ]'
        window.document.body.style.backgroundColor = '#e2cd9f'
    } else if(hora < 18) {
        img.innerText = '[TARDE]'
        window.document.body.style.backgroundColor = '#b9846f'
    } else {
        img.innerText = '[NOITE]'
        window.document.body.style.backgroundColor = '#515154'
    }
}