
// v1
// const p1 = {
//     x: 0,
//     y: 4
// }

// const p2 = {
//     x: 3,
//     y: 0
// }

// function distancia(p1, p2) {
//     const x = p1.x - p2.x
//     const y = p1.y - p2.y
    
//     return Math.sqrt( x*x + y*y )
// }

// console.log( distancia(p1,p2) )


// v2 usando metodos en propiedades de los objetos
const p1 = {
    x: 0,
    y: 4,
    moveX: function (x) { this.x += x },
    moveY: function (y) { this.y += y }
}

const p2 = {
    x: 3,
    y: 0,
    moveX: function (x) { this.x += x },
    moveY: function (y) { this.y += y }
}

function distancia(p1, p2) {
    const x = p1.x - p2.x
    const y = p1.y - p2.y
    
    return Math.sqrt( x*x + y*y )
}

console.log( distancia(p1,p2) )

p1.moveX(10)
p2.moveX(-4)

console.log( distancia(p1,p2) )