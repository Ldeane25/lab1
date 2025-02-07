// Function that takes a string parameter and logs it to the console
function addition(value) {
    console.log("Value is: " + value);
}
// Declare two numeric variables
var firstVal = 42;
var secondVal = 1;
// Compute the sum of the two numbers and convert it to a localized string
var sumOfVals = (firstVal + secondVal).toLocaleString();
// Call the function with the computed sum
addition(sumOfVals);
