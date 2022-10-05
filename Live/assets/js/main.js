// Einzeiliger Kommentar

/* 
Mehrzeiliger Kommentar

 */

// JS Output

console.log("Hallo Kurs!")

// DataTypes
// Primitive Datatypes (String, number, boolean)

// String=Text
console.log("String ist Text")
console.log('it works')
// Wichtig ist, dass Text in Anführungsstrichen ist (egal welche)
console.log("20")

//Numbers 
console.log(20)
console.log(3 + 5)
console.log(4 * 4)
console.log(100 / 10)
console.log(10 - 3)
console.log(4.888954345)
// Flieskomma Zahlen immer mit einem Punkt trennen

//Boolen
console.log(true)
console.log(false)


// Variablen
// 3 Typem: var, let, const
// var wird nicht benötigt 
// Declaration, Assignment

let num1 = 150
console.log(num1)
// Wurde in der Konsole ausgegeben

const pi = 3.14
console.log(pi)

//reassigment
num1 = 50
console.log(num1)
//Neuer Wert wurde in der Konsole ausgegeben

//Const kann kein Reassignment

let num2 = 40
console.log(num1 + num2)


// JS Conventions

//camelCase
let meinHausIstBunt = "red" // Most used

//PascalCase
let MainHausIstBunt = "gelb"

//underscore
let _meinhHausIstBunt = "blue" //Das bitte nicht (Für weniger Verwirrung)

//$
let $meinHausIstBunt = "green" //Das bitte nicht (für weniger Verwirrung)

//NOGO Zone
// let 1meinHausIstBunt = "pink"
//let meinhausistbunt = "purple" //Das bitte nicht


//Js ist case sensitive

let abc
let ABC
let AbC

// String concatination

let firstname = "Bruce"
let lastname = "Wayne"
const adress = "Gotham City"

// Ich Bin Bruce Wayne und komme aus Gotham CIty

console.log("Ich bin " + firstname + " " + lastname + " und komme aus " + adress + ".")


// Übungen 

let hero = "Spiderman"
let city = "NYC"

//Ich bin Spicerman und komme aus NYC!

console.log("Ich bin " + hero + " und komme aus " + city + "!")

let mwst = 1.19
let macbook = 1000

//Mein Macbook hat $$$$ Brutto gekostet

console.log("Mein Macbook hat " + macbook * 1.19 + "€ brutto gekostet.")

// Arithmetik Operatoren 
// + - / * %

let x = 5
let y = 4
let z = 10

console.log(x + x)
console.log(z - y)
console.log(z / x)
console.log(x * y)

//Modulo

//Wie oft passt die erste Zahl in die zweite Zahl, Restwert wird ausgegeben
console.log(x % y)
console.log(z % x)
console.log(20 % 3)

//Increment & Decrement
// Increasment & Decreasment
// ++ & --
//immer 2 + = +1 auf Wert
//immer 2 - = -1 auf Wert
console.log(x)
x++
console.log(x)

console.log(z)
z--
console.log(z)

// weiterer JS Output (Output2)

//Wird zum Testing verwendet
//Schreibt was in das HTML
document.write("Hallo Kurs!")
document.write("BliBlaBlub")
//kann auch elemente einfügen
document.write("<h2>Guten Moren</h2>")
//hier beim style einfache Anführungsstriche verwenden, 2x doppelte macht Fehler
document.write("<h2 style='color: red'>Guten Moren</h2>")

//Window

// window.alert("Hey Hey Hey")


//JS Inputs
//Gibt daten in Konsole aus
let askage = window.prompt("Bitte gib dein Alter ein!")
console.log(askage)
//^gibt null oder Wert zurück

// Cofirm

let confirm = window.confirm("Stimmen Sie den Cookies zu")
console.log(confirm)
//^gibt true oder false zurück
