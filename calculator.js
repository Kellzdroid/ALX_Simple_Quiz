// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}

// Function to get input values safely
function getInputValues() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    return [num1, num2];
}

// Display result in the UI
function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// Add button event listeners
document.getElementById('add').addEventListener('click', function () {
    const [num1, num2] = getInputValues();
    displayResult(add(num1, num2));
});

document.getElementById('subtract').addEventListener('click', function () {
    const [num1, num2] = getInputValues();
    displayResult(subtract(num1, num2));
});

document.getElementById('multiply').addEventListener('click', function () {
    const [num1, num2] = getInputValues();
    displayResult(multiply(num1, num2));
});

document.getElementById('divide').addEventListener('click', function () {
    const [num1, num2] = getInputValues();
    displayResult(divide(num1, num2));
});
