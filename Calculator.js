
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

// when user click the button, the value will be showed in screen
function inputDigit(digit) {
	const { displayValue, waitingForSecondOperand } = calculator; 

	// the flag is change to true by click operator
	if( waitingForSecondOperand === true) {
		calculator.displayValue = digit;
		calculator.waitingForSecondOperand = false;
	} else {	
		// if displayValue === 0, so 0 change to digit
		// else displayValue will append the digit to it
		calculator.displayValue = displayValue === '0' ? digit : displayValue + digit; 
	}

	console.log(calculator);
}


function inputDecimal(dot) {

	// prevent someone press operator and then press '.'
	//if (calculator.waitingForSecondOperand === true) return;

	// if the displayValue does not contain decimal point
	if (!calculator.displayValue.includes(dot)) {
		// append the decimal point
		calculator.displayValue += dot;
	}
} 



function handleOperator(nextOperator) {

	// step 1: 
	// when an operator key is pressed,
	// we convert the current number to float
	// and then store the value to 'firstOperand'
	// if it does not exist.
	// Also set 'waitingForSecondOperand' to true
	// means the second operand is ready to begin.

	// step 2:
	// when user finishes the second operand
	// and hit an operator
	// so we need to display the result of the calculation
	//  object destructuring means more easily to extract the properties	
	
	const {firstOperand, displayValue , operator} = calculator;
	const inputValue = parseFloat(displayValue);

	// if user want to '7+2' but after press '+'
	// user changes his mind, he want to '7-2'
	// so we prevent plus action and
	// change operator:'+' to operator:'-'
	if(operator && calculator.waitingForSecondOperand) {
		calculator.operator = nextOperator;
		console.log(calculator);
		return;
	}


	if (firstOperand === null) {
		calculator.firstOperand = inputValue;
	} else if (operator) {  // non-zero is equal to true
		// create an object 'performCalculation'
		// the properties is +-*/=
		// objectName["propertyName"] access object properties
		const result = performCalculation[operator](firstOperand,inputValue);
		calculator.displayValue = String(result);
		calculator.firstOperand = result;
	}

	calculator.waitingForSecondOperand = true;
	calculator.operator = nextOperator;
	console.log(calculator);
}

const performCalculation = {
	'/':(firstOperand,secondOperand) => firstOperand / secondOperand,
	
	'*':(firstOperand,secondOperand) => firstOperand * secondOperand,
	
	'+':(firstOperand,secondOperand) => firstOperand + secondOperand,
	
	'-':(firstOperand,secondOperand) => firstOperand - secondOperand,
	
	'=':(firstOperand,secondOperand) => secondOperand

};

// AC button do reset the value
function resetCalculator() {
	calculator.displayValue ='0';
	calculator.firstOperand = null;
	calculator.waitingForSecondOperand = false;
	calculator.operator = null;
	console.log(calculator);
}

//updating the display
function updateDisplay() {

	// Get the first element in the document with class="calculator-screen"  
	const display = document.querySelector('.calculator-screen');
	display.value = calculator.displayValue;
}
updateDisplay();



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
		handleOperator(target.value);
		updateDisplay();
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
		resetCalculator();
		updateDisplay();
		return;
	}

	console.log('digit',target.value);
	// print the value user clicked to the screen
	inputDigit(target.value);
	// update the screen
	updateDisplay();


});

