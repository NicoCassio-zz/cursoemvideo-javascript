var idade = 19
if(idade < 16) {
    v = 'Não vota'
} else if(idade < 18 || idade > 65) {
        v = 'Opicional'
} else {
        v = 'Obrigatório'
}
console.log(`Voto: ${v}`)