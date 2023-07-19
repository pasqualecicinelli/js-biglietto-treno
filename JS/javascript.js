//CHIEDO I KM DA PERCORRERE

const km = prompt('Inserisci il numero di chilometri che vuole percorrere:')

console.log('Kilometri da percorrere: ' + km);

//CHIEDO L'ETA' DEL PASSEGERO

const age = prompt('Inserisci l\'età del passeggero');

console.log('Età: ' + age);



//CALCOLO I KM PER IL PREZZO STANDARD

const price = (km * 0.21);

const priceForMinor = '';
const priceForSenior = '';

console.log('Prezzo intero: ' + price);

/*SE I KM O L'ETA' NON SONO CARATTERI NUMERICI IL PROGRAMMA 
INVIA UN ALERT ALL'UTENTE ALTRIMENTI VA AVANTI */

if (isNaN(km) || isNaN(age)) {

    alert('ATTENZIONE Inserire solo caratteri numerici')
} else {

//SE L'ETA' E' INFERIORE A 18 CALCOLO IL PREZZO SOTTRAENDO IL 20%

    if (age < 18) {

        const priceForMinor = ((price / 100) * 20);
        console.log('Prezzo minorenne: ' + priceForMinor);

        function roundToTwo(priceForMinor) {
            return +(Math.round(priceForMinor + "e+2") + "e-2");
        }
        console.log(roundToTwo(priceForMinor));

        document.getElementById('print').innerHTML = roundToTwo(priceForMinor) + ' €';

        //ALTRIMENTI SE L'ETA' E' MAGGIORE DI 65 CALCOLO IL PREZZO SOTTRAENDO IL 40%

    } else if (age > 65) {

        const priceForSenior = ((price / 100) * 40);
        console.log('Prezzo Anziano: ' + priceForSenior);

        function roundToTwo(priceForSenior) {
            return +(Math.round(priceForSenior + "e+2") + "e-2");
        }
        console.log(roundToTwo(priceForSenior));

        document.getElementById('print').innerHTML = roundToTwo(priceForSenior) + ' €';

        //ALTRIMENTI RESTA IL PREZZO STANDARD

    } else {

        console.log('Prezzo intero: ' + price);

        function roundToTwo(price) {
            return +(Math.round(price + "e+2") + "e-2");
        }
        console.log(roundToTwo(price));

        document.getElementById('print').innerHTML = roundToTwo(price) + ' €';
    }

}








