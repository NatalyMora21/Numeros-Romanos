//Función que convierte un número entre 1 a 10 en Romano
const numOnedigit= (num)=>{
    let numromano="";
    if(num>0 && num<4){
        numromano=repeatnum(num, "I");
    }
    else if(num>5 && num<9){
        numromano="V";
        let restanum= num-5;
        numromano+=repeatnum(restanum, "I");
    }
    else{
        num==5 ? numromano= "V": numromano= "X";
    } 
    console.log(numromano);
}

//Función que repite un número: xxx , LL
//numveces: Número de veces que se debe repetir
//numromano: Número en Roma que se va a repetir
const repeatnum= (numveces, numromano)=>{
    let numromanoend="";
    for(let i=0; i<numveces; i++){
        numromanoend+=numromano;   
    }
    console.log(numromanoend);
    return numromanoend;
}


