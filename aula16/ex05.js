function fatorial(número) {
    if(número == 1) {
        return 1
    } else {
        return número * fatorial(número - 1)
    }
}
console.log(`Fatorial de 4: ${fatorial(4)}`)