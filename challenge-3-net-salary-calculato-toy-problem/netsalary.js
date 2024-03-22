/*
Write a program whose major task is to calculate an individual’s Net Salary
by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax),
NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
*/

/*
Here I use the read line module to prompt for an input.
I had never used a RL which required multiple responses, so it was a bit of a challenge
and in the end i had to reachout to a friend who is an experience SE.

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// prompts for basic salary 
rl.question("Enter basic salary: ", (basicSalary) => {
    // prompts for benefits
    rl.question("Enter benefits: ", (benefits) => {
        //parses the results as floats 
      const result = calculateNetSalary(parseFloat(basicSalary), parseFloat(benefits));
        
      console.log("\nSalary Breakdown:");
      for (const key in result) {
          console.log(`${key}: ${result[key]}`);
      }
  
      rl.close();
    });
  });



function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deductions

    // Tax threshold for the year
    const taxThreshold = 24000;  
    // Tax rate (30%)
    const taxRate = 0.3; 
    // NHIF rate (2.5%) 
    const nhifRate = 0.025; 
    // NSSF rate (6%) 
    const nssfRate = 0.06;  

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate tax
    const taxableIncome = Math.max(0, grossSalary - taxThreshold);
    const tax = taxableIncome > 0 ? taxableIncome * taxRate : 0;

    // Calculate NHIF deductions
    const nhifDeductions = basicSalary * nhifRate;

    // Calculate NSSF deductions
    const nssfDeductions = basicSalary * nssfRate;

    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    return {
        "Gross Salary": grossSalary,
        "Tax": tax,
        "NHIF Deductions": nhifDeductions,
        "NSSF Deductions": nssfDeductions,
        "Net Salary": netSalary
    };
}