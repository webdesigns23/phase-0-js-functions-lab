// Function 1
function calculateTax (amount){
    const tax = amount * .10;
    console.log("Tax Value:",tax);
    return tax;
}

calculateTax (100);

//Function 2
function convertToUpperCase (text) {
    console.log(text.toUpperCase());
}

convertToUpperCase("sharmaine");

//Function 3
function findMaximum (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

let result = findMaximum (12,23);
console.log(result);

//Function 4
function isPalindrome (word) {
    let x = word.length - 1
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] != word[x]) {
            return false;
        }
        x--;
    }
    return true;
}

console.log(isPalindrome(" "));

//Function 5
function calculateDiscountedPrice (originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * (discountPercentage/100));
}

console.log(calculateDiscountedPrice(100,150));

// This is required for the test to function properly  
//module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
