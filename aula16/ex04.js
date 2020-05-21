function fatorial(número) {
    let fatorial = 1
    for(let i = 1; i <= número; i++) {
        fatorial *= i
    }
    return fatorial
}
console.log(`Fatorial de 4: ${fatorial(4)}`)