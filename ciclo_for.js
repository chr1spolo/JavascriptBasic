const nombre = "cristian";

const dias = [
    "lunes",
    "marters",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo"
];


function Run() {
    return Math.floor(Math.random() * 10) + 5;
}


let totalKms;
//es mala practica colocar el length del array
//ya que cada vez que ejecuta el ciclo,
//este pregunta por el tamaño del array, y si
// el array se modifica dentro del ciclo, basicamente
// creariamos un ciclo infinito
for( let i = 0; i < dias.length; i++)
{
    const kms = Run();
    totalKms += ksm;
    console.log(`El día ${i} es el ${dias[i]}`);
}