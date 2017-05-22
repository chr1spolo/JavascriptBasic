const starWars7 = "Star Wars: El despertar de la fuerza";
const pgStarWars7 = 13;

const canWatchStarWars7 = (name, age) => {
    if(age >= pgStarWars7)
        return `Bienvenido a la pelicula ${name}`
    else
        return `lo sentimos ${name} no puedes ver la pelicula`
}

var invitados = {
    0 : {
        "name" : "Cristian",
        "age"  : 20
    },
    1 : {
        "name" : "Linda",
        "age"  : 16
    }
};

Object.keys(invitados).map(function(objectKey, index) 
{
   console.log( canWatchStarWars7( invitados[objectKey]['name'], invitados[objectKey]['age'] ) ); 
});