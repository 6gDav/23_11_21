// script.js

const container = document.getElementById('grid-container');
const numbers = [];
let clickedNumbers = [];
let startTime; // Az időmérés kezdeti időpontja

// Generálj véletlenszerű számokat 0-tól 11-ig
for (let i = 0; i < 12; i++) {
  numbers.push(i);
}

// Keverd össze a számokat
numbers.sort(() => Math.random() - 0.5);

// Hozz létre div elemeket a véletlenszerű számokkal
for (let i = 0; i < 12; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.innerHTML = numbers[i];

  // Adj hozzá egy eseménykezelőt a kattintásra
  box.addEventListener('click', function() {
    // Ellenőrizd a kiválasztott számot a sorrendben
    if (parseInt(box.innerHTML) === clickedNumbers.length) {
      // Az első kattintásnál kezdd el az időmérést
      if (clickedNumbers.length === 0) {
        startTime = new Date();
      }

      // A szám helyes, hozzáadhatjuk a clickedNumbers tömbhöz
      clickedNumbers.push(parseInt(box.innerHTML));
      // Állítsd be a láthatóságot a kiválasztott doboznál
      box.style.visibility = 'hidden';

      // Ellenőrizd, hogy az összes számot megnyomták-e sorrendben
      if (clickedNumbers.length === numbers.length) {
        // Minden számot megnyomtak, számold ki az eltelt időt
        const endTime = new Date();
        const elapsedTime = (endTime - startTime) / 1000; // Másodpercben

        // Játék vége, mutasd az időt és indítsd újra a játékot
        alert(`Gratulálok! Nyertél! Idő: ${elapsedTime} másodperc`);
        location.reload(); // Oldal újratöltése
      }
    } else {
      // A szám rossz helyen van, játék újraindítása
      alert('Rossz sorrend! Próbáld újra!');
      location.reload(); // Oldal újratöltése
    }
  });

  container.appendChild(box);
}
