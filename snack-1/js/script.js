/* Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati
 (inserire il numero nell'array solo se non è già presente). */

//Creo l'array
const listNumber = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//Chiedo all'utente 5 numeri 
for(let i = 0; i < 5; i++) {
    let myNumbers = parseInt(prompt("Inserisci i tuoi 5 numeri"));
    console.log(myNumbers)
    numberCheck = listNumber.includes(myNumbers);

    //Controllo se sono presenti nell'array
    if (numberCheck === false) {
        listNumber.push(myNumbers);
    } else {
        alert("questo numero è gia presente e non verra inserito!")
    }
}

alert("i tuoi numeri sono " + listNumber);