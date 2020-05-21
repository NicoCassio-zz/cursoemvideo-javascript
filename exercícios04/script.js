function tabuada() {
    let número = document.querySelector('input#cNum')
    let tabuada = document.querySelector('select#cTab')
    if(número.value.length != 0) {
        número = Number(número.value)
        tabuada.innerHTML = ''
        for(let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${número} x ${i} = ${número * i}`
            tabuada.appendChild(item)
        }
    } else {
        window.alert('Digite um número')
    }
}