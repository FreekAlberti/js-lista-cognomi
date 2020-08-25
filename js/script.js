//Chiedere all’utente il cognome, inserirlo in un array con altri cognomi, stampa la lista ordinata alfabeticamente, scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

//chiedere all'utente il cognome

var cognomeUtente = prompt("Scrivi il tuo cognome");
var tuttoMinuscolo = cognomeUtente.toLowerCase();
var cogUtenteCorrectCase = tuttoMinuscolo[0].toUpperCase() + tuttoMinuscolo.slice(1);

//inserirlo in array

cognomi.push(cogUtenteCorrectCase);

//stampa elementi array in ordine alfabetico

cognomi.sort();
console.log(cognomi);

//scrivi la posizione del cognome inserito

for (var i = 0; i < cognomi.length; i++) {
  if (cognomi[i] == cogUtenteCorrectCase) {
    i++
    console.log("La posizione del cognome é la numero: " + i)
  }
}
