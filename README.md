# TRACCIA
- calcolo del prezzo del biglietto del treno

## DESCRIZIONE

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## PROCEDIMENTO

- Chiedere all'utente attraverso promnt
    - kilometri (km) da percorrere (controllo varibili che siano caratteri numerici)
    - età del passeggero (controllo varibili che siano caratteri numerici) e (controllo sull'età che sia inferiore a 120 anni)

### CALCOLO PREZZO

km * 0.21

### SE

- età < 18 sconto 20%

### ALTRIMENTI SE 

- età > 65 sconto 40%

### ALTRIMENTI

- prezzo finale con 2 cifre decimali

stampare all'utente il prezzo finale