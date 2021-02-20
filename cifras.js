const {numOnedigit,validateranknumtwodigits,validaterankthreedigits,validaterankfourdigits}= require('./calculatenumRomano');

const validatecifras=(num)=>{

    const cantcifrasnum= num.toString().length;

    switch (cantcifrasnum){
        //Número con una cifra
        case 1: 
            //Llamar a la función
            return numOnedigit(num)
            break;

        //Número con dos cifras
        case 2:
            return validateranknumtwodigits(num)
            break;
        //Número con tres cifras
        case 3:
            return validaterankthreedigits(num);
            break;

        //Número con cuatro cifras
        case 4:
            return (validaterankfourdigits(num));
            break;

        default:
    }
}

module.exports = validatecifras;

