
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
// const p1 = {
//     x: 0,
//     y: 4,
//     moveX: function (x) { this.x += x },
//     moveY: function (y) { this.y += y }
// }

// const p2 = {
//     x: 3,
//     y: 0,
//     moveX: function (x) { this.x += x },
//     moveY: function (y) { this.y += y }
// }

// function distancia(p1, p2) {
//     const x = p1.x - p2.x
//     const y = p1.y - p2.y
    
//     return Math.sqrt( x*x + y*y )
// }

// console.log( distancia(p1,p2) )

// p1.moveX(10)
// p2.moveX(-4)

// console.log( distancia(p1,p2) )

// v3 usando clases / prototipos
// function Punto(x, y) {
//     this.x = x
//     this.y = y
// }

// Punto.prototype.moveX = function moveX(x) { this.x += x }
// Punto.prototype.moveY = function moveY(y) { this.y += y }
// Punto.prototype.distance = function distance(p) {
//     const x = this.x - p.x
//     const y = this.y - p.y

//     return Math.sqrt( x*x + y*y )
// }

// const p1 = new Punto(0, 4)

// const p2 = new Punto(3, 0)


// console.log(p1.distance(p2))
// console.log(p2.distance(p1))
// p1.moveX(10)
// console.log(p1.distance(p2))
// p2.moveY(-4)
// console.log(p1.distance(p2))

// v4 usando object create para prototipos
const Punto = {
    init: function (x, y) {
        this.x = x
        this.y = y
    },
    moveX: function moveX(x) {
        this.x += x
    },
    moveY: function moveX(y) {
        this.y += y
    },
    distance: function distance(p) {
        const x = this.x - p.x
        const y = this.y - p.y
    
        return Math.sqrt( x*x + y*y )
    }
}

const p1 = Object.create(Punto)
      p2 = Object.create(Punto)
p1.init(0, 4)
p2.init(3, 0)

console.log(p1.distance(p2))
console.log(p2.distance(p1))
p1.moveX(10)
console.log(p1.distance(p2))
p2.moveY(-4)
console.log(p1.distance(p2))