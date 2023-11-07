/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

let stampa=0;
for(i=0;i<pets.length;i++)
{stampa=pets[i]
  console.log(stampa)
  
  }



/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log(pets.sort())

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log(pets.sort().reverse())

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log(pets.push("redfish"))
pets.shift()
console.log(pets)
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars[0].licensePlate="patenteB"
cars[1].licensePlate="patenteB"
cars[2].licensePlate="patenteB"
console.log(cars)
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let newObj={
  brand: 'Opel',
    model: 'Corsa',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
}

cars.push(newObj)
console.log(cars)

delete cars[0].trims[2]
delete cars[1].trims[1]
delete cars[2].trims[2]
delete cars[3].trims[2]
console.log(cars)



/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
let justTrims=[]
for(i=0;i<cars.length;i++){

   justTrims.push(cars[i].trims)
  
}
console.log([justTrims])

delete justTrims[0][1]
delete justTrims[2][1]
delete justTrims[3][1]

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/





 
    

    let car = 0
for (let i = 0; i<cars.length; i++){
  car = cars[i]
  if(car.color.startsWith('b') ){
    console.log("Fizz")
  } else{
    console.log("Buzz")
  }
}
  

//lue"||"black

console.log(colori)

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
var numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

var i=0;
while(i<numericArray.length){

  console.log(numericArray[i]
   )
   if(numericArray[i]===32){break;}
   else{i++;}
 
}



/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const traslitterazione=[];





for (i = 0; i < charactersArray.length; i++)
  switch (charactersArray[i]) {
    case "g":
      traslitterazione.push(7)
      //inserisci alliniterno di questo oggetto che ha proprieta blu l'oggetto che hai iterato
      break;
    case "n":
      traslitterazione.push(12)
      break;
      case"u":
      traslitterazione.push(3)
      break;
    case "z":
      traslitterazione.push(21)
      break;
    case "d":
      traslitterazione.push(4)
      break;
    
  }
console.log(traslitterazione)