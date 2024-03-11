/*
- Il software deve chiedere per 5 volte all’utente di inserire un numero.
  Il programma stampa la somma di tutti i numeri inseriti.
 */

//Chiedo all'utente 5 numeri
let sum = 0;
for(let i = 0; i < 5; i++) {
    let numbers = parseInt(prompt("Inserisci il tuo numero"));
    sum += numbers;
}
alert("la somma dei numeri inseriti è: " + sum)
