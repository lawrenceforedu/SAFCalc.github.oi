function convertNumber() {
  var numberInput = document.getElementById('numberInput').value;
  var conversionFrom = document.getElementById('conversionFrom').value;
  var conversionTo = document.getElementById('conversionTo').value;
  var result = document.getElementById('result');

  var decimalNumber;

  if (conversionFrom === 'binary') {
    decimalNumber = parseInt(numberInput, 2);
  } else if (conversionFrom === 'decimal') {
    decimalNumber = parseInt(numberInput, 10);
  } else if (conversionFrom === 'hexadecimal') {
    decimalNumber = parseInt(numberInput, 16);
  }

  var convertedNumber;

  if (conversionTo === 'binary') {
    convertedNumber = decimalNumber.toString(2);
  } else if (conversionTo === 'decimal') {
    convertedNumber = decimalNumber.toString(10);
  } else if (conversionTo === 'hexadecimal') {
    convertedNumber = decimalNumber.toString(16).toUpperCase();
  }

  result.textContent = conversionTo.charAt(0).toUpperCase() + conversionTo.slice(1) + ': ' + convertedNumber;
}

document.getElementById('converterForm').addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  var numberInput = document.getElementById('numberInput').value;

  // Validate the user input (example: check if the number is a valid number)
  if (isNaN(numberInput) || parseInt(numberInput) <= 0) {
    var errorPopup = document.getElementById('errorPopup');
    var errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = 'Invalid number! Please enter a valid number.';
    errorPopup.style.display = 'block';
  } else {
    closeErrorPopup();
    convertNumber();
  }
}

function closeErrorPopup() {
  document.getElementById('errorPopup').style.display = 'none';
}
