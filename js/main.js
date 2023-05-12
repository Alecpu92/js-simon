// dichiarazione variabili

let listaNumeriCasuali = [];
let listaNumeriPrompt = [];
let numeroCasuale;
let numeroPrompt;
// ciclo for per generare numeri casuali
for (let i = 0; i < 5; i++) {
  numeroCasuale = genNumeriCasuali(1, 900);
  console.log(numeroCasuale);
  listaNumeriCasuali.push(numeroCasuale);
}
console.log(listaNumeriCasuali);
// alert che avvisa di ricordare i numeri
alert("Memorizza i numeri seguenti: " + listaNumeriCasuali);
// timer di attesa prima della risposta
setTimeout(function() {
  for (let i = 0; i < 5; i++) {
    numeroPrompt = parseInt(prompt("inserisci i numeri della schermata precedente"));
    for (let f = 0; f < listaNumeriCasuali.length; f++) {
      if (numeroPrompt == listaNumeriCasuali[f]) {
        listaNumeriPrompt.push(numeroPrompt);
      }
    }

  }
//   alert che indica i numeri indovinati
  alert("Hai indovinato " + listaNumeriPrompt.length + " numeri. Esattamente i numeri: " + listaNumeriPrompt)
  console.log(listaNumeriPrompt)
}, 30000)





// funzioni
function genNumeriCasuali(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}