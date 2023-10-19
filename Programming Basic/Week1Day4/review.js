// ! write a function that will push in an array all even numbers staring from ;


// ?  R-I-O-T
// Your Code here
function evenNumber() {
    //create an empty array
    var evenArray = [];

    // create a loop from 1-10
    for (var i = 1; i <= 10; i++) {
        // on every number check to see if that number is even
        if (i % 2 == 0) {
            // push the number that We found too  the empty array
            evenArray.push(i)

        }

    }

    // return the result of the function
    return evenArray


}







//----------------------------------------



// ! a function that can have multiple params
// ? add two number together

var number1 = 5
var number2 = 10

Add(number1, 70)

function Add(num1, num2) {
    // create a container to hold the sum of the numbers
    var total = 0;
    // add the number to each other
    total = num1 + num2

    //return the result
    return total

}



// Your Code here











//----------------------------------------
// ! Right a function that give the total of Odds numbers

// -----------0 --1 --2
var number = [11, 22, 33, 44];
function loopOverTheOddsNumbers(oddArray) {
    // Create a container to hold the total of odds number
    var totalOdds = 0

    // loop over the array
    for (var i = oddArray.length - 1; i >= 0; i--) {
        // check if the number is Odd or not 
        if (oddArray[i] % 2 != 0) {
            // Add the odd numbers to the container 
            totalOdds = totalOdds + oddArray[i]
        }
    }



    // return the the container 
    return totalOdds
}