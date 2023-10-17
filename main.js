console.log("Hello World!");

Descrizione:
//Visualizzare in pagina 5 numeri casuali (anche tramite alert)
//Da lì parte un timer di 30 secondi. (durante il quale i numero non devono essere visibili all’utente)
//Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

// creo la funzione che genera i numeri casuali
function randomNumbers() {
    let casualNumbers = [];
    for (let i = 0; i < 5; i++) {
        casualNumbers.push(Math.floor(Math.random() * 100) + 1);
    }
    return casualNumbers;
};
let generatedNumbers = randomNumbers();
alert("Ecco i 5 numeri casuali: " + generatedNumbers);


//aggiungo il timer di 30 secondi
//let timeLeft = 30;
let timeLeft = 5; // per test più veloce
let elem = document.getElementById('Timer');
let timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        getUserInput();
    } else {
        elem.innerHTML = timeLeft + ' secondi rimanenti';
        timeLeft--;
    }
};

// devo prende l'imput dell'utente
function getUserInput() {
    let userNumbers = [];
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Inserisci un numero");
        userNumbers.push(parseInt(userInput));
    }

    // devo controllare che i numeri inseriti dall'utente siano uguali a quelli generati dal computer
    let equalNumbers = [];
    for (let i = 0; i < 5; i++) {
        if (userNumbers[i] === generatedNumbers[i]) {
            equalNumbers.push(userNumbers[i]);
        }
    };

    // ora devo stampare i risultati e confrontarli per poterli inserire
    let finalMessage = "Corretto" + equalNumbers.length + " numeri su 5";
    if (equalNumbers.length > 0) {
        finalMessage = "I numeri giusti sono: " + equalNumbers;
    } else {
        finalMessage = "Tutti i numeri sono sbagliati";
    }
    alert(finalMessage);
};







