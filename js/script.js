
// STEP 1
//Creare un oggetto che descriva uno studente con le seguenti proprietà:
// nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// STEP 2
//Creare un array di oggetti di studenti.
//Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// STEP 3
//Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo
//oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(function () {

  // creo un oggetto studente e stampo le proprietà
  var studente = {
    'nome' : 'simona',
    'cognome' : 'palumbo',
    'eta' : 42
  }
  for (var k in studente) {
    console.log(studente[k]);
  }
});
