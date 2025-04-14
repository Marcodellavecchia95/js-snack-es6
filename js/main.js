// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
const biciLeggeraEL = document.getElementById("bici-leggera");
const bici = [
  {
    nome: "mountain bike",
    peso: 60,
  },
  { nome: "trial bike", peso: 50 },

  { nome: "running bike", peso: 40 },
];
let biciLeggera = bici[0];
for (let i = 0; i < bici.length; i++) {
  if (bici[i].peso < biciLeggera.peso) {
    biciLeggera = bici[i];
    biciLeggeraEL.innerText = `La bici più leggera è: ${biciLeggera.nome} grazie al suo peso di soli ${biciLeggera.peso} Kg`;
  }
}

// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
