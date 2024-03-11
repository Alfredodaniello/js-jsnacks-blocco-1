/*
- Crea un array vuoto.
  Chiedi per 6 volte all’utente di inserire un numero,
  se è dispari inseriscilo nell’array.
*/

//Creo l'arrey vuoto
const list = [];

//Chiedo all'utente di inserire 6 numeri 
for(i = 0; i < 6; i++){
  let numbers = parseInt(prompt("Inserisci i tuoi numeri"));
  //Controllo se i numeri sono dispari e in caso li inserisco
  if (numbers % 2 !== 0 ) {
  list.push(numbers);
  }
}

alert(list);

