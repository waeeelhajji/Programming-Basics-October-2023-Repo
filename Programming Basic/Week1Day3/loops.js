1// ====== FOR LOOP ======

// In Javascript , a "for loop" help you perform tasks repeatedly.

// == General Syntax of FOR LOOP  ==

// 3S

// Start ==  initialiazation
// Stop == Condition
// Steps == finam Expression


// Recipe 

// for(start ; stop;steps){

// }

// create a loop that goes from 1 to 10 
// start from var
// for (var i = 1; i <= 10 ; i++){
//   console.log(i)
// }
// i++
// i = i + 1
// i+= 1
// ---------------0-----------1-----------2-----3
// var animals = ['Red Panda', 'Elephant', 'Koala', 'Bear'];

// for(var i = 0; i<= animals.length-1;i++){
//     console.log(animals[i])
// }



var userLogin = [55, 145, 89, 500]
for(var user = 0 ; user <= userLogin.length-1;user++){
    if (userLogin[user]==500){
        console.log("Congrtas " + userLogin[user])
    }else {
        console.log("next time " + userLogin[user])
    }
}


/* ------------------ group activity -----------

    write a for-loop that starts at year 1996 and ends in 2023
    on every year (iteration) have it log the year and the string "JS is awesome!"
    on every 10 years, log "happy decade of JS!"
    when you reach the end, log "HAPPY 27 years of JAVASCRIPT! 🎈🎈🎈"

    ex. "1996 JS is awesome"
        "1997 JS is awesome"
        ...
        "2004 JS is awesome"
        "2005 JS is awesome"
        "happy decade of JS!"
        "2007 JS is awesome"
        ....
        "2022 JS is awesome"
        "HAPPY 27 years of JAVASCRIPT! 🎈🎈🎈"

 */