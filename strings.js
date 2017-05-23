
function platzom(string) 
{
    
    let translation = string;
    /*
     * si la palabra termina en ar, se le quitan los caracteres
     */
     if ( string.toLowerCase().endsWith('ar') ) 
     {
         translation = string.slice(0, -2);
     }

     /*
     * si la palabra inicia con z, añade "pe" al final
     */

    if ( string.toLowerCase().startsWith('z') ) 
    {
        translation += 'pe';       
    }

     /*
     * si la palabra a traducir tiene mas de 10 palabras
     * se parte a la mitad y se une con un guion
     */

    if( string.length >= 10 )
    {
        const first  = translation.slice(0, Math.round(string.length / 2));
        const second = translation.slice(Math.round(string.length / 2));
        translation  = `${first}-${second}`;
    }


    const reverse = (str) => str.split('').reverse().join('');

    const minMay  = (str) => {
        const length1      = str.length;
        let   translation = '';
        let   capitalize  = true;
        for (let  i= 0; i < length1; i++) 
        {
            const char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }

        return translation;
    }

    //si la palabra de reversa es igual a la normal, 
    //las reglas anteriores no importa y se intercalan entre
    // mayusculas y minusculas
    if ( string == reverse(string) ) 
    {
        return minMay(string); 
    }
    

     return translation;
}

console.log(platzom("programar")); //program
console.log(platzom("Zorro")); //Zorrope
console.log(platzom("Zarpar")); //Zarppe
console.log(platzom("paranguatuirimicuaro")); //paranguatui-rimicuaro
console.log(platzom("sometemos"));