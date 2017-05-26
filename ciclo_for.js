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


let totalKms = 0;


let size = dias.length;

for( let i = 0; i < size; i++)
{
    const kms = Run();
    totalKms += kms;
    console.log(`El día ${dias[i]} ${nombre} corrió ${kms} km`);
}

console.log(`En total, ${nombre} corrió ${totalKms}
con un promedio de ${(totalKms / size).toFixed(2)}`);