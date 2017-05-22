let base = 5;
let height = 7;


//arrows functions javascript
// puede llevar llaves en caso de tener muchas lineas, 
// o simplemente quitar las llaves y si es una sola 
// ejecución, no hace falta ni colocar return

let triangleArea = (base, height) => base * height / 2;

console.log(`El área de un triángulo de base
${base} y alltura ${height} es : ${triangleArea(base, height)}`);