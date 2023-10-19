// ? write a function that will push in an array all even numbers staring from 1-10;


// R-I-O-T
function evenNumbers(){
    // create container that will hold the even numbers*
    var evenArray = []
    // create a loop  from 1 => 10
    for(var i = 1; i<= 10;i++){
        // check on every number to see if that number is even or not 
        if(i % 2 == 0){
            // if it is an even number we add it to our container
            evenArray.push(i)

        }
    }
    // return our container
    return evenArray 

}
























//----------------------------------------



// a function that can have multiple params
// write a function that add two number to each other

var number1 = 7
var number2 = 9

function addNumbers(num1,num2){
    // create the container of the sum of the numbers
    var sum =  0
    // add the two number to the container
    sum = num1 + num2
    // return the container
    return sum
}


// Your Code here











//----------------------------------------
//  Right a function that give the total of Odds numbers 