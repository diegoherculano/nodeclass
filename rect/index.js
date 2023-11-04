const rect = require('./rect')

function solveRect(l, b) {
    console.log(`Resolvendo problema para l = ${l} e b ${b}`)

    if (l < 0 || b < 0) {
        console.log('Erro')
        return
    }

    console.log(`Area ${rect.area(l, b)}`)
    console.log(`Perimetro ${rect.perimeter(l, b)}`)
}

solveRect(2, 4)
solveRect(3, 5)
solveRect(-3, 5)