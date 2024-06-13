document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('colorButton');
    
    button.addEventListener('click', function() {
        // Generate a random color
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        // Set the button's background color to the random color
        button.style.backgroundColor=randomColor;
    });
});

function checkSum() {
    // Get the values from the form
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    // Compute the sum
    const sum = number1+ number2;

    // Display the result in an alert box
    if (isNaN(sum)) {
        alert("Incorrect Result please enter valid numbers");
    } else {
        alert("Correct Result:"  +sum);
    }
}
function addNumbers() {
    // Get the values from the input fields
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);

    // Calculate the sum
    let sum = num1 + num2;

    // Display the result
    document.getElementById('result').textContent = "Addition : " + sum;
}
function clearFields() {
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('result').textContent = '';
}
