const {numOnedigit,repeatnum}= require('./calculatenumRomano');

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
            console.log("1");
            break;
        //Número con dos cifras
        case 3:
            console.log("1");
            break;

        //Número con dos cifras
        case 4:
            console.log("1");
            break;

        default:
            console.log('Error, cantidad de digitos mayor');



    }
}

validatecifras(9);