/*
- Calcola la somma e la media dei primi 10 numeri.
*/

//Creo il mio array
const listNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//Calcolo la somma
let sum = 0;
for( let i = 0; i <10; i++){
 sum += listNumbers[i];
}

//Calcolo la media dei primi 10 numeri
const media = sum / 10

alert("la somma dei primi 10 numeri è: " + sum);
alert("la media dei primi 10 numeri è: " + media);
