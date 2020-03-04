
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
	display.value = calculator.displayValue;
}
updateDisplay();

<<<<<<< HEAD
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

=======


// listen for clicks on the calculator nad determine what type of key was clicked.
const keys = document.querySelector('.calculator-keys');
// element.addEventListener(event, function)
// event like as 'click', 'mousedown'
// fuction is we want to call when event occurs
keys.addEventListener('click', (event) => {
	// event means 'click', event.target means the button value
	const target = event.target;

	// prevent user click the space between buttons, the value will be undefinded.
	if(!target.matches('button')) {
		return;
	}

	if(target.classList.contains('operator')) {
		console.log('operator', target.value);
		return;
	}
	if(target.classList.contains('decimal')) {
		console.log('decimal', target.value);
		inputDecimal(target.value);
		updateDisplay();
		return;
	}
	if(target.classList.contains('all-clear')) {
		console.log('clear', target.value);
		return;
	}

	console.log('digit',target.value);
	// print the value user clicked to the screen
	inputDigit(target.value);
	// update the screen
	updateDisplay();


});


// when user click the button, the value will be showed in screen
function inputDigit(digit) {
	const displayValue = calculator.displayValue;

	// if displayValue === 0, so 0 change to digit
	// else displayValue will append the digit to it
	calculator.displayValue = displayValue === '0' ? digit : displayValue + digit; 

}


function inputDecimal(dot) {

	// if the displayValue does not contain decimal point
	if (!calculator.displayValue.includes(dot)) {
		// append the decimal point
		calculator.displayValue += dot;
	}
} 

function handleOperator(nextOperator) {
	
}
>>>>>>> 77a56d8ebe66c145ebcb9b0855ba5c110b0053db
