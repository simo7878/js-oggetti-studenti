
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
  var studenteSingolo = {
    'nome' : 'simona',
    'cognome' : 'palumbo',
    'eta' : 42
  }
  //for (var k in studenteSingolo) {
    //console.log(studenteSingolo[k]);
  //}
//});

// creo array di oggetti studente, ciclo su tutti gli studenti, stampo di
//ogniuno nome e cognome

var studenti = [
  {
    'nome' : 'simona',
    'cognome' : 'palumbo',
    'eta' : 42
  },

  {
    'nome' : 'maria',
    'cognome' : 'sabellico',
    'eta' : 28
  },

  {
    'nome' : 'stefano',
    'cognome' : 'marino',
    'eta' : 34
  },

  {
    'nome' : 'lorenzo',
    'cognome' : 'famiglietti',
    'eta' : 30
  }
];

for (var i = 0; i < studenti.length; i++) {
  studenti[i]
  console.log(studenti[i]);
  }
});
