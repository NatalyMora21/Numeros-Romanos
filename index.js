//Función principal, recibe el número entero.
const intToRoman=(num)=>{
    /*
    1. Validar que el número no sea cero, no sea negativo, esté entre 1<=num <=3999
    2. Validar cantidad de digitos que tiene el número
    */
    if (num>=1 && num<=3999 && Number.isInteger(num)){
        console.log(Number.isInteger(num));
        console.log('Ok');
        //Llamar al archivo que valida las cifras
    }
    else{
        console.log('Mal');
    }
   
}


intToRoman();