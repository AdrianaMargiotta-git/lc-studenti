//Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

var studente = {
  'nome' : ' Adriana',
  'cognome' : 'Margiotta',
  'eta' : '22'
};

console.log(studente);

for (var key in studente) {
  console.log(key + ' ' + studente[key]);
}

//Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var arrayStudenti = [
  {
    'nome' : ' Adriana',
    'cognome' : 'Margiotta',
    'eta' : '22'
  },
  {
    'nome' : 'John',
    'cognome' : 'Doe',
    'eta' : '34'
  },
  {
    'nome' : 'Salvatore',
    'cognome' : 'Margiotta',
    'eta' : '60'
  }
];

console.log(arrayStudenti);

for (var i = 0; i < arrayStudenti.length; i++) {
  console.log(arrayStudenti[i].nome + ' ' + arrayStudenti[i].cognome);
};

//Dare la possibilità all’utente attraverso 3 prompt di
//aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nuovoNome = prompt("Inserisci il tuo nome");
var nuovoCognome = prompt("Inserisci il tuo cognome");
var nuovaEta = prompt("Inserisci la tua eta");

/*var nuovoStudente = {
  'nome' : nuovoNome,
  'cognome' : nuovoCognome,
  'eta' : nuovaEta
};*/
//arrayStudenti.push(nuovoStudente);

arrayStudenti.push({
  'nome' : nuovoNome,
  'cognome' : nuovoCognome,
  'eta' : nuovaEta
});


console.log(arrayStudenti);
