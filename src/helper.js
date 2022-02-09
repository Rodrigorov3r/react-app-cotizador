
//obtiene la diferencia de años
export function obetenerDifYear(year){
    return new Date().getFullYear() - year;
}

//calcula el total a pagar según la marca
export function calculaMarca (marca){
    let incremento;

    switch(marca){ //va a evaluar la marca
        case 'Europeo':
            incremento = 1.30;
            break;
        case 'Americano':
            incremento = 1.15;
            break;
        case 'Asiatico':
            incremento = 1.05;
            break;


        //LO PRIMERO A COLOCAR DE UN SWITCH es el default
        default:
            break;
    }

    return incremento;
}

//Calculo el tipo de seguro
export function obtenerPlan(plan){
    return (plan === 'basico') ? 1.20 : 1.50;
}

// Muestra primera letra Mayusc
export function primerMayus(texto){
     return texto.charAt(0).toUpperCase() + texto.slice(1);  
    
}