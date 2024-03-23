/*Write a program that prompts the user to input student marks.
The input should be between 0 and 100. Then output the correct grade: */


/* Here I use the recursive readline module indorder to be able
to prompt the user for input in the terminal and display
the appropriate response. It exits once you type the word 'exit' */



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const promptUser = () => {
    rl.question('Please enter the test score: ', (userInput) =>{
        if(userInput.toLowerCase() === 'exit') {
            rl.close();
             return;
        }
        console.log(gradeGenerator(userInput));
        promptUser();
    }
    )
}
promptUser()


/* I use the if else statement nested in a function 
    for the condition checks 
*/
 function gradeGenerator(score){
        let grade = ' '
        if  (score > 100 || score < 0) {
                grade = 'Please enter a score btwn 0-100!!'
        } else if(score >= 79) {
                grade = 'A'
        }else if(score < 79 && score >= 60) {
            grade = 'B'
        }else if(score <= 59 && score > 49){
            grade = 'C'
        }else if(score <= 49 && score > 40){
            grade = 'D'
        }else if(score<40){
            grade = 'E'
        }else{
            return 'please enter a valid score'
        }

        return `Your grade is: ${grade}`
 }

