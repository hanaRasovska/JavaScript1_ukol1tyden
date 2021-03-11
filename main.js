// tady je místo pro náš program
/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */


/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  let text = document.querySelector("#ctverecek").innerHTML = "Gratulace!";
}
/** zmena barvy ctverecku**/
function priKliknuti() {
  let tlacCol;
  tlacCol = document.querySelector(".ctverecek");
  tlacCol.style.backgroundColor = "green";
}
/** zobrazeni vysledku**/
function zobrazVysledek() {
  let tlacRes;
  tlacRes = document.querySelector("#vysledek").innerHTML = secti(10, 5);
}

function secti(a, b) {
    let c = a + b;
    return c;
  }

  