// Arrays

//  arrays allow us to group related data with each other
// they are build with square brackets []
// the data of the arrays are called 'elements'


// Index            0---------1-------------2
var animaArray = ["lion 🦁","monkey 🙈", "goat 🐐"]

// console.log(animaArray)
// SHOW the seconde Animal
console.log(animaArray[1]) //"monkey 🙈"

// SHOW the Last animal 
console.log(animaArray[animaArray.length-1]) // "goat 🐐"

// IN JavaScript that we can have a diffrent datatypes inside the array 
var dog = ["Wanda",2,"brown and black","female",["black","agressive"],false]

// first step is accessing the value in the outer array ,
// then the seconde step is accessing the value of the inner array
console.log(dog[4][1]) // "agressive"


// How we can add things and remove things from the array 
animaArray.push("giraffe 🦒")

console.log(animaArray)

animaArray.pop()

console.log(animaArray)

// this is comment

// CTRL + /

// this
//  is 
// multi
// ligne

