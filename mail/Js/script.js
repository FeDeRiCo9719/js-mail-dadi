/* Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento! 

ESERCIZIO 1. Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo. */

// INPUT - chiedere mail utente
// var user = "Franco@email.com";
// var user = "Paola@email.com";
// var user = "Alex@email.com";
// var user = "Marco@email.com";
// var user = "user_non_riconosciuto";
var user = prompt("inserisci email");
// console.log(user);


// PROGRAMMA - verificare validità mail (confrontare input con lista)
var list = ["Marco@email.com", "Franco@email.com", "Paola@email.com", "Alex@email.com"];
for ( var i=0; i<list.length; i++ ) {
    // console.log(list[i]);
    if ( list[i] == user  ) {
        break;
    }
}

// OUTPUT - stampare l'esito controllo
if ( list[i] == user  ) {
    // console.log("Accesso Consentito");
    alert("Accesso Consentito");
} else {
    // console.log("Accesso Negato");
    alert("Accesso Negato");
}


//ALTERNATIVA CORRETTA
var trovato = false; // variabile di supporto, si da un valore booleano (false, true)
for ( var i=0; i<list.length; i++ ) {
    if ( list[i] == user ) { // cerchiamo 'user' confrontando ogni elemento dell'array con l'input
        trovato = true; // se si trova 'user', la variabile 'trovato' passa da 'false' a 'true' altrimenti rimarrà 'false'
    }
}

if ( trovato = true ) { 
    alert("Accesso Consentito");
} else {
    alert("Accesso Negato");
}