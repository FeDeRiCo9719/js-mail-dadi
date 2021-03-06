 
/* 
ESERCIZIO 2. Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento! */


// INPUT - numero random player e cpu
//player
// var player =  Math.floor(Math.random() * 6) + 1;
// console.log( "Il tuo punteggio è " + player);
//cpu
// var cpu = Math.floor(Math.random() * 6) + 1;
// alert( "Il punteggio del tuo avversario è " + cpu);
// console.log( "Il punteggio del tuo avversario è " + cpu);

// // PROGRAMMA - stabilire chi ha effettuato il punteggio più alto
// if (player > cpu) {
//     // console.log("Hai vinto!");
//     alert("Hai vinto!");
// } else if (cpu > player) {
//     // console.log("Hai perso!");
//     alert("Hai perso!");
// } else {
//     // console.log("Pareggio!");
//     alert("Pareggio!");
// }


// VARIANTE - giochino
// INPUT
alert("Scegli un numero, se il tuo punteggio sarà identico al punteggio CPU avrai vinto!")
// Punteggio player 
var player =  parseInt(prompt("inserisci un numero da 1 a 6"));
while (player>6 || player<1){
    alert("numero non valido, riprova");
    player = parseInt(prompt("inserisci un numero da 1 a 6"));
}
alert( "Il tuo punteggio è " + player);
// Punteggio cpu 
var cpu = Math.floor(Math.random() * 6) + 1;
alert( "Il punteggio CPU uscito è " + cpu);

// PROGRAMMA - stabilire se il tuo punteggio è identico al punteggio cpu
if (player !== cpu) {
    alert("Hai perso!");
} else if (player === cpu) {
    // console.log("Pareggio!");
    alert("Hai vinto!");
}