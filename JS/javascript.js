//CHIEDO I KM DA PERCORRERE

const km = parseFloat(prompt('Inserisci il numero di chilometri che vuole percorrere:'));

console.log('Kilometri da percorrere: ' + km);

//CHIEDO L'ETA' DEL PASSEGERO

const age = parseInt(prompt('Inserisci l\'età del passeggero'));

console.log('Età: ' + age);



//CALCOLO I KM PER IL PREZZO STANDARD

const price = (km * 0.21);


const discount = 0;
const priceForMinor = 0;
const priceForSenior = 0;

console.log('Prezzo intero: ' + price);

/*SE I KM O L'ETA' NON SONO CARATTERI NUMERICI IL PROGRAMMA 
INVIA UN ALERT ALL'UTENTE ALTRIMENTI VA AVANTI */

if (isNaN(km) || isNaN(age)) {

    alert('ATTENZIONE Inserire solo caratteri numerici');

    //CONTROLLO SULL'ETA' CHE SIA INFERIORE A 120 ANNI

} else if (age > 120) {

    alert('ATTENZIONE Inserire un\' età corretta');

} else {


    //SE L'ETA' E' INFERIORE A 18 CALCOLO IL PREZZO SOTTRAENDO IL 20%

    if (age < 18) {

        const discount = ((price * 20) / 100);
        console.log('Sconto minorenne: ' + discount);
        const priceForMinor = (price - discount);

        
        console.log('Prezzo Minorenne: ' + priceForMinor.toFixed(2));

        document.getElementById('print').innerHTML = (priceForMinor.toFixed(2)) + ' €' + ' è stato applicato uno sconto del 20% in quanto minorenne';

        //ALTRIMENTI SE L'ETA' E' MAGGIORE DI 65 CALCOLO IL PREZZO SOTTRAENDO IL 40%

    } else if (age > 65) {

        const discount = ((price * 40) / 100);
        console.log('Sconto Anziano: ' + discount);
        const priceForSenior = (price - discount);

       
        console.log('Prezzo Anziano: ' + priceForSenior.toFixed(2));

        document.getElementById('print').innerHTML = (priceForSenior.toFixed(2)) + ' €' + ' è stato applicato uno sconto del 40% in quanto over 65';

        //ALTRIMENTI RESTA IL PREZZO STANDARD

    } else {

        console.log('Prezzo intero: ' + price);

       
        console.log('Prezzo Standard: ' + price.toFixed(2));

        document.getElementById('print').innerHTML = (price.toFixed(2)) + ' €' + ' prezzo normale';
    }

}








