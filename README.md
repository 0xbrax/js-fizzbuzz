START programma:

Creare un ciclo con contatore che parte da 1
Impostare la condizione minore uguale a 100 cicli
Aumentare il contatore di un valore per ciclo

SE il contatore è multiplo di 3 (operazione modulo)
    Scrivi nell'html "Fizz"
ALTRIMENTI SE il contatore è multiplo di 5 (operazione modulo)
    Scrivi nell'html "Buzz"
ALTRIMENTI SE il contatore è multiplo sia di 3 sia di 5 (&& and)
    Scrivi nell'html "FizzBuzz"
ALTRIMENTI
    Scrivi il contatore

********
INFO: 
- Usare "append" invece di "innerHtml"
********

FINE programma.




Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
**Prima di partire a scrivere codice poniamoci qualche domanda:**
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
**Consigli del giorno:**
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
**BONUS 1:**
Crea un container nel DOM e aggiungi (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.
**BONUS 2:**
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
**BONUS 3:**
Rendi dinamico il numero di elementi da stampare chiedendone il numero tramite una prompt o un form.