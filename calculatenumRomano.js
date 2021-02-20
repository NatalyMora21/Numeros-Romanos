//Función que convierte un número entre 1 a 10 en Romano
const numOnedigit = (num) => {
    let numromano="";
    if (num > 0 && num < 4) {
        numromano = repeatnum(num, "I");
    }
    else if (num > 5 && num < 9) {
        numromano="V";
        let restanum = num - 5;
        numromano += repeatnum(restanum, "I");
    }
    else {
        if (num == 4) {
            numromano="IV";
        }
        else if (num == 9) {
            numromano="IX";
        }
        else {
            num == 5 ? numromano="V" : numromano = "";
        }
    }
    return(numromano);
}

//Función que repite un número: xxx , LL
//numveces: Número de veces que se debe repetir
//numromano: Número en Romano que se va a repetir
const repeatnum = (numveces, numromano) => {
    let numromanoend="";
    for (let i = 0; i < numveces; i++) {
        numromanoend += numromano;
    }
    return numromanoend;
}

//Validar número de dos digitos
const validatenumtwodigits = (num, comparenumbase, numromanob) => {
    let numromano="";
    //Validar el primer digito
    let firstdigit = num.toString()[0];
    //Último digito,Enviar a la función Onedigit par que devuelva el número en romano
    let secondDigit = numOnedigit(num.toString()[1]);
    //Valida si es numero base de 3 cifras y le asigna el número romano enviado 10=X ,L=50
    if (num == comparenumbase) {
        numromano = numromanob;
    }
    else {
        //Se debe enviar el primer número para que se cree y  repita si es necesario
        numromano = repeatnum(firstdigit, numromanob);
        //Segundo digito
        numromano += secondDigit;
    }
    return numromano;
}

const validateranknumtwodigits = (num) => {
    let secondDigit = numOnedigit(num.toString()[1]);
    let numromano="";
    //Validar rando entre 10 a <40  que es x xx xxx
    if (num >= 10 && num < 40) {
        numromano=validatenumtwodigits(num, '10', 'X');
    }
    else if (num >= 50 && num < 90) {
        numromano="L"
        //Si el primero digito es 5, no se debe repetir
        if (num.toString()[0] == 5) {
            numromano+=secondDigit;
        }
        //Si el segundo digito no es 5 , es numero mayor a 50, entonces se tiene que sumar al L
        else {
            //Nuemero de veces que se tiene que repetir un numero mayor a 5
            let firstcifrarepeatnum = num.toString()[0] - 5;
            numromano += validatenumtwodigits(firstcifrarepeatnum, '50', 'X') + secondDigit;
        }
    }
    else {
        //Números entre 40-50 y 90-100
        if (num.toString()[0] == 4) {
            numromano="XL"
            num == 40 ? numromano : numromano = numromano + secondDigit;
        }
        else if (num.toString()[0] == 9) {
            numromano="XC"
            num == 90 ? numromano : numromano + secondDigit;
        }
    }
    return (numromano);
}

const validatescounddigit=(num) => {
    if (num == 0 || num == 00 || num == 000) {
        return true;
    }
    else return false
}




const validatenumthreedigitos = (num, comparenumbase, numromanob) => {
    let numromano="";
    //Primer digito
    let firstcifrarepeat = num.toString()[0];
    let lasttwodigits = validateranknumtwodigits(num.toString().substr(1, 2));
    //1. Validar el primer digito para saber la cantidad de veces que debe repetirse
    //2. En este caso el primer número siempre será el x
    //3. Validar si el digito dos es cero
    if (num == comparenumbase) {
        numromano = numromanob;
    }
    else if (validatescounddigit(num.toString()[1])) {
        //Si el segundo digito es cero, valida la cantidad de veces del primero y se revisa el tercer
        let thirddigit = numOnedigit(num.toString()[2]);

        if (firstcifrarepeat >= 5 && firstcifrarepeat < 9) {
            firstcifrarepeat = firstcifrarepeat - 5;
        }
        numromano = repeatnum(firstcifrarepeat, numromanob);
        //ultimo digitos
        numromano += thirddigit;
    }
    else {
        //Si el segundo digito NO es cero, valida la cantidad de veces del primero y se envían los dos ultimos
        if (firstcifrarepeat >= 5 && firstcifrarepeat < 9) {
            firstcifrarepeat = firstcifrarepeat - 5;
        }
        numromano = repeatnum(firstcifrarepeat, numromanob);
        //dos ultimos digitos
        numromano += lasttwodigits;
    }
    return (numromano);
}

const validaterankthreedigits = (num) => {

    let numromano="";
    //NO OLVIDAR RETORNAR
    if (num >= 100 && num < 400) {
        numromano=validatenumthreedigitos(num, '100', 'C');
    }
    else if (num >= 500 && num < 900) {
        let thirddigit="";

        if (num.toString()[0] == 5) {
            //Validar que le número no se 0
            if (validatescounddigit(num.toString()[1])) {
                //Si el segundo digito es cero
                thirddigit = numOnedigit(num.toString()[2]);
            }
            else {
                //Validar los dos últimos digitos
                thirddigit = validateranknumtwodigits(num.toString().substr(1, 2));
            }
            numromano="D"+thirddigit;
        }
        else {
            numromano="D"+validatenumthreedigitos(num, '500', 'C')
        }
    }
    else {
        //Números entre 400-500 y 900-1000
        if (num >= 400 && num < 500) {
            numromano="CD";

            if (validatescounddigit(num.toString()[1])) {
                //Si el segundo digito es cero
                thirddigit = numOnedigit(num.toString()[2]);
            }
            else {
                //Validar los dos últimos digitos
                thirddigit = validateranknumtwodigits(num.toString().substr(1, 2));
            }
            numromano += thirddigit;
        }
        else if (num >= 900 && num < 1000) {
            numromano="CM";
            if (validatescounddigit(num.toString()[1])) {
                //Si el segundo digito es cero
                thirddigit = numOnedigit(num.toString()[2]);
            }
            else {
                //Validar los dos últimos digitos
                thirddigit = validateranknumtwodigits(num.toString().substr(1, 2));
            }
            numromano += thirddigit;
        }
    }
    return numromano;
}







const validatenumfourdigitos = (num, comparenumbase, numromanob) => {
    let numromano="";
    //Primer digito
    let firstcifrarepeat = num.toString()[0];
    
    //1. Validar el primer digito para saber la cantidad de veces que debe repetirse
    //2. En este caso el primer número siempre será el x
    //3. Validar si el digito dos es cero
    if (num == comparenumbase) {
        numromano = numromanob;
    }
    else if (validatescounddigit(num.toString()[1])) {
        if (firstcifrarepeat >= 5 && firstcifrarepeat < 9) {
            firstcifrarepeat = firstcifrarepeat - 5;
            
        }
        else{
            numromano = repeatnum(firstcifrarepeat, numromanob);
        }
        let thirddigitFourth="";
        //Si el segundo digito es cero, valida la si el tercer digito  es cero
        if (validatescounddigit(num.toString()[2])) {
            //traer el ultimo digito
            thirddigitFourth = numOnedigit(num.toString()[3]);
        }
        else {
            //Trer los dos últimos números
            thirddigitFourth = validateranknumtwodigits(num.toString().substr(2, 3));
        }
        //ultimo digitos
        numromano+=thirddigitFourth;
    }
    else {
        if (firstcifrarepeat >= 5 && firstcifrarepeat < 9) {
            firstcifrarepeat = firstcifrarepeat - 5;
        }
        numromano = repeatnum(firstcifrarepeat, numromanob);
        //traer los últimos 3 digitos digitos
        let thirddigit = validaterankthreedigits(num.toString().substr(1, 3))
        numromano+=thirddigit;
        

        //Si el segundo digito NO es cero, valida la cantidad de veces del primero y se envían los dos ultimos
        /*console.log("num de dos ultimos digitos de un numero de 3 cifras", firstcifrarepeat);
        if (firstcifrarepeat >= 5 && firstcifrarepeat < 9) {
            firstcifrarepeat = firstcifrarepeat - 5;
            console.log(firstcifrarepeat);
        }
        numromano = repeatnum(firstcifrarepeat, numromanob);
        //dos ultimos digitos
        numromano += lasttwodigits;*/
    }
    return (numromano);
}

const validaterankfourdigits = (num) => {

    let numromano="";
    //NO OLVIDAR RETORNAR
    if (num >= 1000 && num < 4000) {
        numromano=validatenumfourdigitos(num, '1000', 'M');

    }
    return numromano;
}


module.exports = { numOnedigit, repeatnum, validateranknumtwodigits, validaterankthreedigits,validaterankfourdigits };