function verificar() {
    var idade = (new Date().getFullYear()) - Number(window.document.querySelector('input#cNasc').value)
    var sexo = window.document.getElementsByName('tSexo')[0].checked?'Homem':'Mulher'
    window.document.querySelector('p#resposta').innerText = `${sexo} com ${idade} anos`
}