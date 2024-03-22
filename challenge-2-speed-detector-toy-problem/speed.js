/** 
 * Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70,
 * it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give
 * the driver one demerit point and print the total number of demerit points.
 */

/* Here I use the recursive readline module indorder to be able
to prompt the user for input in the terminal and display
the appropriate response. It exits once you type the word 'exit' */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

// declare function using the arrow function
const promptUser = () => {
    rl.question('Please enter the speed: ', (userInput) =>{
        
        // exits terminal if user enter the word 'exit'
        if(userInput.toLowerCase() === 'exit') {
            rl.close();
             return;
        }
        console.log(speedCheck(userInput));
        promptUser();
    }
    )
}
promptUser()


// create a an arrow function
const speedCheck = (speed) => {

    // declare optimum speed and demerit points
    const optimumSpeed = 70
    let points         = 0

    // checks if the input is a number. 
    if (isNaN(speed)) return "Invalid speed input";

    /* this logic is to account for speeds 71, 72, 73, 74
    after which, demerit points start to be issued. */
    if(speed <= optimumSpeed + 4) return 'Ok'

    /* checks difference between the current speed and the
    optimum speed and divides it by 5 to find out how many
    demerit points it's worth */
    points = Math.floor((speed - optimumSpeed)/5);

    if (points > 12) return "License suspended"

    return `Demerit points: ${points}`;
} 


