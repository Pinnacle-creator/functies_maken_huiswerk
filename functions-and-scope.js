// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
//       *door een for loop te gebruiken
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
//      *door in de for loop-log de notatie variabele[i] te gebruiken om over de gehele array elk nummer afzonderlijk aan te spreken.
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
//      * met een if statement.
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

let amount = 0;

for (let i = 0; i < grades.length; i++) {
// console.log(grades[i]);
    if (grades[i] >= 8) {
        // console.log(grades[i])
        // als we hier uitkomen, betekent dat dat het cijfer hoger of gelijk is aan 8
        // wat de huidige waarde van amount ook is, daar willen we dan +1 bij optellen.
        amount = amount + 1;
    }
}

//console.log(amount);


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

// functie declaratie voor een functie die het aantal grades >= de 8 naar de console print
function cumLaude(grades) {

    //veranderbare variabele die het aantal grades >= 8 bijhoudt
    let amount = 0;

    //for loop die over de lengte can de array loopt
    for (let i = 0; i < grades.length; i++) {
//        if( grades[i] >= 8 ) amount++
        //wanneer de huidige array entry >=8
        if (grades[i] >= 8) {

            //zet de counter van amount 1 hoger
            amount = amount + 1;

        }
    }
    //log het aantal getallen >= 8
    console.log('Amount above 8:', amount)
}

cumLaude([8, 9, 4, 6, 10]);

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
//        *elk getal bij elkaar optellen en delen door het totaal aantal
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
//        *elk cijfer en het totaal aantal cijfers
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
//        *array.length gebruiken
// Log het antwoord in de terminal.

//zet het totaal op 0
let total = 0;

//loop over de lengte van de array
for (let i = 0; i < grades.length; i++) {
    //het totaal wordt telkens opgehoogd met 1 getal uit de array
    total += grades[i];
}
//de variabele avg is gelijk aan het totaal aantal getallen/waardes gedeeld door de lengte (of bereik/totaal) van de array
let avg = total / grades.length;

//log het gemiddelde cijfer
console.log(avg);

// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

//declareer een functie genaamd averageGrade die input verwacht
function averageGrade(input) {

    //bepaal het nulpunt van de veranderlijke variabele
    let total = 0;

    //loop over de lengte van de input en hoog op met 1
    for (let i = 0; i < input.length; i++) {

        //het totaal word telkens met 1 getal uit input opgehoogd
        total += input[i];
    }
    //avg is gelijk aan het totaal gedeeld door de lengte/bereik van de input
    let avg = total / input.length;

    // eventueel console.log(avg);

    // geef de gemiddelde waarde terug
    return avg
}

// roep de functie aan en bepaal het bereik van de input
averageGrade([8, 9, 4, 6, 10]);

// log het resultaat van de variabele grades die door de functie averageGrade gerunt wordt
console.log(averageGrade(grades));

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

//maak een functie die afrondt op 2 decimalen
function decimal(number) {
    //geef het resultaat terug van de methode math.round door het gemiddelde cijfer te vermenigvuldigen met 100, dan af te ronden en dan weer te delen door 100.
    return Math.round(number * 100) / 100;
}

//const averages = averageGrade([1,3,4,5,6,7])
//const afgerondeGrades = decimal( averages )
//console.log( 'Average grade: ', afgerondeGrades )

//log het gemiddelde cijfer met twee decimalen achter de komma, door decimal aan te roepen op het resultaat van average grades, berekend op graded.
console.log('Average grade on grades array', decimal(averageGrade(grades)));


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
//        *door een for loop te gebruiken
// * Op welke conditie moet ik checken?
//        *het hoogste cijfer in de array
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
//        *een variabele
// Log het antwoord in de terminal.


    // maak een variabele om het getal in op te slaan en bepaal het nulpunt
    let storeNumber = 0;


    // for loop die over de array heen loopt
    for (let i = 0; i < grades.length; i++) {
        // wanneer ieder getal groter is dan storeNumber, dan is storenumber elk getal in grades dat uiteindelijk het grootste is
        if (grades[i] > storeNumber) {
            storeNumber = grades[i];
        }
    }
    // log het hoogste nummer
    console.log("The biggest number is: ", storeNumber);




// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

// Declareer een functie met een parameter
function biggestNumberInArray(arr) {
    // gebruik dezelfde logica, echter met de arr.length als argument, omdat grades uiteindelijk in de functie gezet moetworden op de plaats van arr, waarna de hoogste berekent wordt.
    let storeNumber = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > storeNumber) {
            storeNumber = arr[i];
        }
    }

    console.log("The biggest number is: ", storeNumber);
    // Eventueel zou deze return gebruikt kunnen worden: return storeNumber;
}

// roep de functie aan
biggestNumberInArray([6, 4, 5]);