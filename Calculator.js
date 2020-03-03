
// create a object to keep track of values.
const calculator = {
	// example: 12 + 10.
	// first operand:12
	// operator: +
	// second operand:10

	// holds a string value represent the input of
	// the user or the result of an operation.
	// shown on the screen
	displayValue: '0',

	firstOperand: null,
	
	// a flag that checks whether an expression can
	// be evaluated or whether the second operand
	// needs to be inputed
	waitingForSecondOperand:false,
	
	operator: null
};

//updating the display
function updateDisplay() {

	// Get the first element in the document with class="calculator-screen"  
	const display = document.querySelector('.calculator-screen');
	console.log('screenvalue:' + display.value);
	console.log('displayValue: ' + calculator.displayValue);
	display.value = calculator.displayValue;
	console.log('screenvalue:' + display.value);
}

updateDisplay();
