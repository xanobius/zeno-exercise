
// Primitive Datentypen
const firstname = "Dario"; // string -> mit Apostroph
const ganzzahl = 1235;    // integer / Number
const fliesskommazahle = 456.456; // float // number
const wahrfalsch = true;    // true oder false, ohne Apostroph
const charsy = 'a';

// Komplexe Datentypen
// Arrays
const clubMembers = [
  'Dario',
  'David',
  'Fabienne'
];

function sayName(name) {
  console.log(name);
}
// Objekt
const personX = {
  firstname: 'Dario',
  lastname: 'Zenhäusern',
  village: 'Bürchen',
  birthyear: 1987,
  children : [
    { type: 'dogy', name: 'Wuff'},
    { type: 'dogy', name: 'Bello'},
  ]
};


const sayName2 = function (name) {
  console.log(name);
};

(function (name){ console.log(name)})('dings')
