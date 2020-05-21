let v = []
function cadastrar() {
    let n = document.querySelector('input#cNum')
    if(n.value.length != 0) {
        let l = document.querySelector('select#cVet')
        if(v.length == 0) {
            l.innerHTML = ''
        }
        n = Number(n.value)
        v.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        l.appendChild(item)
    } else {
        window.alert('Digite um número')
    }
}
function analisar() {
    if(v.length > 0) {
        let r = document.querySelector('div#resposta')
        let p = []
        let ma = 0
        let me = 0
        let m = 0
        let s = 0
        r.innerHTML = ''
        for(var i in v) {
            if(i == 0) {
                ma = v[i]
                me = v[i]
            } else if(v[i] > ma) {
                ma = v[i]
            } else if(v[i] < me) {
                me = v[i]
            }
            m += v[i]
        }
        m /= v.length
        for(var i = 0; i < 5; i++) {
            p[i] = document.createElement('p')
        }
        p[0].innerHTML = `Total: ${v.length}`
        p[1].innerHTML = `Maior: ${ma}`
        p[2].innerHTML = `Menor: ${me}`
        p[3].innerHTML = `Soma: ${s}`
        p[4].innerHTML = `Média: ${m.toFixed(2)}`
        for(var i in p) {
            r.appendChild(p[i])
        }
    } else {
        window.alert('Nenhum valor cadastrado')
    }
}