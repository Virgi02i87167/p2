/*1. Determinar si un número ingresado por el usuario es positivo, negativo o si es 
cero.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function evaluar(numero){
    if (numero >= 1) {
        return console.log("El numero " +numero + " es positivo")
        }else if(numero <= -1){
            return console.log("El numero " +numero + " es negativo")
            }else{
                return console.log("El numero es 0");
            }
}

rl.question("Ingrese un número: ", (numero) => {  
    const num = evaluar(numero);
})

*/

/*2. Calcular el mayor de 3 números ingresados por el usuario.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function Calcular(numero1, numero2, numero3 ){
    if (parseFloat(numero1) >= parseFloat(numero2) && parseFloat(numero1) >= parseFloat(numero3)) {
        return console.log(numero1 + " es mayor")
    }else if(parseFloat(numero2) >= parseFloat(numero1) && parseFloat(numero2) >= parseFloat(numero3)){
        return console.log(numero2 + " es mayor")
    }else if(parseFloat(numero3) >= parseFloat(numero1) && parseFloat(numero3) >= parseFloat(numero2)){
        return console.log(numero3 + " es mayor")
    }
}

rl.question("Ingrese el primer número: ", (numero1) => {  
    rl.question("Ingrese el segundo número: ", (numero2) =>{
        rl.question("Ingrese el tercer numero: ", (numero3) =>{
            const num = Calcular(numero1, numero2, numero3);
        })
    })
})
*/


/*3. Calcular la factorial de un número !, el factorial es ir multiplicando el 
resultado  la posición del número. El estado inicia es 1.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite el numero a realizar el factorial: ", (n1) => {
    let resultado = 1;
    for(let i = 1; i <= parseFloat(n1); i++){
        resultado *= i;
    }
    console.log("El factorial es: " + resultado);
})
*/

// 4. Determinar si un numero es par o es impar./
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })


// rl.question("Ingrese el numero a evaluar: ", (num) => {
//     if(parseFloat(num) % 2 === 0){
//         console.log("El numero es par");
//     }else{
//         console.log("El numero no es par");
//     }
// })