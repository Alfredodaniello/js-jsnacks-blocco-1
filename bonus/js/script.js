/*
- Dato un array contenente 10 numeri, stampare in console il numero più grande.
*/

//Creo il mio array
const listNumbers = [56,2,456,56,1000,6,7,8,9,10,];

//Stampo il numero più grande 
const maxNumber = Math.max(...listNumbers);
alert(maxNumber)