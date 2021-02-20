const {numOnedigit,validateranknumtwodigits,validaterankthreedigits,validaterankfourdigits}= require('./calculatenumRomano');

const validatecifras=(num)=>{

    const cantcifrasnum= num.toString().length;

    switch (cantcifrasnum){
        //Número con una cifra
        case 1: 
            //Llamar a la función
            console.log(numOnedigit(num));
            return numOnedigit(num)
            break;

        //Número con dos cifras
        case 2:
            console.log(validateranknumtwodigits(num));
            return validateranknumtwodigits(num)
            break;
        //Número con tres cifras
        case 3:
            console.log(validaterankthreedigits(num));
            return validaterankthreedigits(num);
            break;

        //Número con cuatro cifras
        case 4:
            console.log(validaterankfourdigits(num));
            return (validaterankfourdigits(num));
            break;

        default:
            console.log('Error, cantidad de digitos mayor');
    }
}

module.exports = validatecifras;

