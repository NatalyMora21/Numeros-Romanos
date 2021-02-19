//Función que convierte un número entre 1 a 10 en Romano
let numromano = "";
let firstcifrarepeat="";
const numOnedigit = (num) => {

    if (num > 0 && num < 4) {
        numromano = repeatnum(num, "I");
    }
    else if (num > 5 && num < 9) {
        numromano = "V";
        let restanum = num - 5;
        numromano += repeatnum(restanum, "I");
    }
    else {
        if (num == 4) {
            numromano = "IV";
        }
        else if (num == 9) {
            numromano = "IX";
        }
        else {
            num == 5 ? numromano = "V" : numromano = "";
        }
    }
    console.log('num', numromano);
    return (numromano);
}

//Función que repite un número: xxx , LL
//numveces: Número de veces que se debe repetir
//numromano: Número en Roma que se va a repetir
const repeatnum = (numveces, numromano) => {
    let numromanoend = "";
    for (let i = 0; i < numveces; i++) {
        numromanoend += numromano;
    }
    return numromanoend;
}

const validaterangonum = (num) => {
    //Primer digito
    firstcifrarepeat = num.toString()[0];
    let secondDigit=numOnedigit(num.toString()[1]);
    if (num >= 10 && num < 40) {
        //1. Validar el primer digito para saber la cantidad de veces que debe repetirse
        //2. En este caso el primer número siempre será el x
        if (num == 10) {
            numromano = "X";
        }
        else {
            numromano = repeatnum(firstcifrarepeat, 'X');
            //Segundo digito
            numromano += secondDigit;
        }
        console.log("dos digitos entre 10 y 40", numromano);
    }
    else if (num >= 50 && num < 90) {
        numromano = "L";
        //Validar si el número en la primera posición es 5 para continuar con el segundo digito
        if(num.toString()[0]==5){
            numromano += secondDigit;
        }
        else{
            firstcifrarepeat=num.toString()[0]-5;
            numromano += repeatnum(firstcifrarepeat, 'X')+secondDigit;
        }
        console.log("dos digitos entre 50 y 90", numromano);
    }
    else{
        //Números entre 40-50 y 90-100
        if (num.toString()[0]==4){
            numromano= "XL"
            num==40? numromano: numromano=numromano+secondDigit;
            
        }
        else if(num.toString()[0]==9){
            numromano= "XC"
            num==90? numromano: numromano+secondDigit;
        }
        console.log("Números entre 40-50 y 90-100", numromano);
    }



}

module.exports = { numOnedigit, repeatnum, validaterangonum };