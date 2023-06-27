// Read the principal amount, rate of interest, and time in years from user input
const principal = parseFloat(prompt("Enter the principal amount:"));
const rate = parseFloat(prompt("Enter the rate of interest:"));
const time = parseFloat(prompt("Enter the time in years:"));

// Calculate simple interest
const interest = (principal * rate * time) / 100;

// Display the result
console.log("Simple Interest:", interest);
