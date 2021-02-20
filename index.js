const validatecifras = require('./cifras')

const intToRoman=(num)=>{
    /*
    1. Validar que el número no sea cero, no sea negativo, esté entre 1<=num <=3999
    2. Validar cantidad de digitos que tiene el número
    */
    if (num>=1 && num<=3999 && Number.isInteger(num)){
        validatecifras(num);
    }
    else{
        console.log("Número inválido");
        return ('Número inválido');
        
    }
}

intToRoman(3999);

