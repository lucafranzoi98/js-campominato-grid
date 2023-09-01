// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const playButtonEl = document.getElementById("play-button");
const gridEl = document.getElementById("grid");
const numberCells = 100;

function toggleCells(cell) {
   
}

/**
 * Generate a grid with n cells
 * @param {number} numberCells 
 */
function generateCells(numberCells) {
   for (let i = 0; i < numberCells; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.innerHTML = i + 1;
      gridEl.append(cell);

      cell.addEventListener("click", function(){
         this.classList.toggle("bg-click");
         console.log(cell.innerHTML);
      });
   }
}

playButtonEl.addEventListener("click", function(e){
   generateCells(numberCells);

   e.preventDefault();
})



