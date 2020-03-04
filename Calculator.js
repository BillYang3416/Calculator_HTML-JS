
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

// listen for clicks on the calculator and 
// determine what type of key was clicked
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
	const target = event.target;
	if(!target.matches('button')) {
		return;
	}
	if(target.classList.contains('operator')) {
		console.log('operator',target.value);
		return;
	}
	if(target.classList.contains('decimal')) {
		console.log('decimal',target.value);
		return;
	}
	if(target.classList.contains('all-clear')) {
		console.log('clear',target.value);
		return;
	}
	console.log('clear',target.value);
});

