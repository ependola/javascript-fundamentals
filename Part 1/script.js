/*
const now = 2021
const ageEdu = now - 1994;
const ageChia = now - 1998;
console.log(ageEdu, ageChia);

console.log(ageEdu * 2, ageEdu / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 2 = 2 * 2 * 2

const firstName = "Eduardo";
const lastName = "Pendola";
console.log(firstName + " " + lastName);


const country = "Ecuador";
const continent = "America";
const finland = 6;
let population = 12;
const isIsland = false;
let language;
language = "español";
population++;
description = "Portugal is in Europe, and its 11 million people speak portuguese"

// Estamos imprimiendo los valores de las variables en la consola.
console.log(country);
console.log(continent);
console.log(population);
console.log(population > finland);

let markWeight = 78;
let johnWeight = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let jhonBMI = johnWeight / johnHeight ** 2;

console.log(markBMI);
console.log(jhonBMI);

let markHigherBMI = markBMI > jhonBMI;

console.log(markHigherBMI);

markWeight = 95;
johnWeight = 85;
markHeight = 1.88;
johnHeight = 1.76;

let markBMI2 = markWeight / markHeight ** 2;
let jhonBMI2 = johnWeight / johnHeight ** 2;

console.log(markBMI2);
console.log(jhonBMI2);

let markHigherBMI2 = markBMI2 > jhonBMI2;

console.log(markHigherBMI2);


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew)
console.log(`Justr a regular string...`);

console.log("String with \n\
multiple \n\
lines")

console.log(`String
multiple
lines`)


const age = 15;

if (age >= 18) {
    console.log("Sarah can start deiving license 👌");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah can't drive 😢. Wait another ${yearsLeft} years.`)
}


const birthYear = 2021;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

la estructura de if else es:
if (boolang) {
    escribimos lo que queremos que haga si es true
} else {
    escribimos lo que queremos que haga si es false
}



let markWeight = 95;
let johnWeight = 85;
let markHeight = 1.88;
let johnHeight = 1.76;

let markBMI = markWeight / markHeight ** 2;
let jhonBMI = johnWeight / johnHeight ** 2;

console.log(markBMI);
console.log(jhonBMI);

if (markBMI > jhonBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than Jhon's (${jhonBMI})`);
} else {
    console.log(`John's BMI (${jhonBMI}) is higher than Mark's (${markBMI})`);
}


//Type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I'm " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");

let n = "1" + 1 // "11"
n = n - 1 // "n = 11 - 1"
console.log(n);



// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all")
} else {
    console.log("You should get a job")
}
// como money es falsy se cumple el else porque JS está coercionando money a que sea un bulean y al ser 0 es falsy.

let height;
if(height) {
    console.log("height is defined");
} else {
    console.log("height is undefined")
}
// con esto podemos saber si existe una variable, si la hemos definido. De esta manera si no está definida es falsy.


const age = 18;
if (age === 18) console.log("You just became an adult");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof (favourite));

if (favourite === 23) {
    console.log("Cool, 23 es a cool number!")
} else if (favourite === 7) {
    console.log("7 is also a cool number");
} else {
    console.log("Number is not 23 nor 7");
}

if (favourite !== 23) console.log("Why not 23?")


// el === hace referencia a que ambos valores son iguales: 18 === 18 es true
// el == hace type correction a los valores: "18" == 18 es true


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;


if (shouldDrive) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive")
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive")
}


let dolphinScoreOne = Number(prompt("Enter Dolphin score 1: "));
let dolphinScoreTwo = Number(prompt("Enter Dolphin score 2: "));
let dolphinScoreThree = Number(prompt("Enter Dolphin score 3: "));
let koalaScoreOne = Number(prompt("Enter Koala score 1: "));
let koalaScoreTwo = Number(prompt("Enter Koala score 2: "));
let koalaScoreThree = Number(prompt("Enter Koala score 3: "));

let dolphinScoreTotal = (dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree) / 3;

let koalaScoreTotal = (koalaScoreOne + koalaScoreTwo + koalaScoreThree) / 3;

console.log(`Dolphin scored ${dolphinScoreTotal} average points in total`);
console.log(`Koala scored ${koalaScoreTotal} average points in total`);

if (dolphinScoreTotal >= 100 || koalaScoreTotal >= 100) {
    if (dolphinScoreTotal > koalaScoreTotal) {
        console.log("Dolphins are the winners! ✨");
    } else if (dolphinScoreTotal < koalaScoreTotal) {
        console.log("Koala are the winners! ✨")
    } else {
        console.log("Its a draw! 👀")
    }
} else {
    console.log("None of the teams scored more than 100, there is no winner 😢");
}



const day = "monday";

switch (day) {
    case "monday": // day === "monday"
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("not a valid day")
}

if (day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend :D");
} else {
    console.log("not a valid day");
}


// este sería un ejemplo de cómo usar el ternary operator (condicional)
const age = 23;
age >= 18 ? console.log("I like to drink wine!") :
    console.log("I like to drink water!");

const drink = age >= 18 ? "Wine" : "Water";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "Wine";
} else {
    drink2 = "water";
}
console.log(drink2);
//podemos meter el condicional en un vaina escrita por ejemplo:
console.log(`I like to drink ${age >= 18 ? "Wine" : "Water"}`);

*/

//coding challenge 4

let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : 0.20;

console.log(`Your bill is ${bill}, your tip to pay is ${tip}, you have to pay a total value of ${tip + bill}`); 