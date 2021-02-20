const {numOnedigit,validateranknumtwodigits,validaterankthreedigits,validaterankfourdigits}= require('./calculatenumRomano');

const validatecifras=(num)=>{

    const cantcifrasnum= num.toString().length;

    switch (cantcifrasnum){
        //Número con una cifra
        case 1: 
            //Llamar a la función
            numOnedigit(num);
            break;

        //Número con dos cifras
        case 2:
            console.log("2");
            //1. Validar el rango en el que está el número 
            console.log(validateranknumtwodigits(num));
            break;
        //Número con dos cifras
        case 3:
            console.log("3");
            console.log(validaterankthreedigits(num));
            break;

        //Número con dos cifras
        case 4:
            console.log(validaterankfourdigits(num));
            break;

        default:
            console.log('Error, cantidad de digitos mayor');
    }
}

validatecifras(1100);