/* --------------------------
        ESERCIZIO 1
--------------------------  */

const keystorage = "name-memory"; // variabile chiave di ricerca

// riferimento all'input
const inputName = document.getElementById("input-name");
console.log(inputName);

//riferimento ai bottoni
const saveBtn = document.getElementById("save");
const removeBtn = document.getElementById("remove");

// riferimento al form

const form = document.getElementById("form");

// riferimento al p
const p = document.getElementById("p");

// funzione per salvare in memoria il contenuto
const save = () => {
  // valore da salvare
  const name = inputName.value;

  // salvo il valore
  localStorage.setItem(keystorage, name);
  alert("contenuto salvato");

  // recuperiamo il dato in memoria
  const nameMemory = localStorage.getItem(keystorage);
  console.log(nameMemory);

  // inseriamo il dato nell'html
  if (nameMemory) {
    p.innerText = `Ciao ${nameMemory} riscivi il tuo nome qua sotto se lo vuoi cambiare :)`;
    form.reset(); // resettiamo i campi del form
  }
};

// funzione per rimuovere il dato in memoria e dall'html
const remove = () => {
  const hasConfirme = confirm("Vuoi davvero rimuovere il nome precedentemente salvato?");

  if (hasConfirme) {
    localStorage.removeItem(keystorage);
    p.innerText = "";
  }
};

// applicare le funzioni ai bottoni

saveBtn.onclick = save;
removeBtn.onclick = remove;

/* --------------------------
        ESERCIZIO 2
--------------------------  */

const secondStorage = "Second-Timer";

// variabile timer
const timer = document.getElementById("timer");

let count = sessionStorage.getItem(sessionStorage);

// recupero il valore in memoria

// funzione timer
function timerStart() {
  setInterval(() => {
    count++;
    timer.innerText = count;
    // salvo il valore in memoria
    sessionStorage.setItem(sessionStorage, count);
  }, 1000);
}

timerStart();

// function timerStart() {
//   count++;
//   timer.innerText = count;
//   // salvo il valore in memoria
//   sessionStorage.setItem(sessionStorage, count);
// }
// setInterval(timerStart(), 1000, );

console.log();
