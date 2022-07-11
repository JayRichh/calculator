
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}

const output = document.querySelector('.output');
const keys = document.querySelector('.calculator-keys');
if (keys) {
keys.addEventListener('click', (event) => {
});
    if (target.matches('input')) {
        const key = target.innerText;
        if (key === 'C') {
            calculator.displayValue = '0';
        } else if (key === '=') {
            calculator.displayValue = calculator.firstOperand + calculator.operator + calculator.displayValue;
        }
        else if (key === '+') {
            calculator.add();
        }
        else {
            calculator.displayValue += key;
        }
        output.innerText = calculator.displayValue;
    }
}

function updateDisplay() {
    const { displayValue } = calculator;
    output.innerText = displayValue;
}

function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = '0.';
        calculator.waitingForSecondOperand = false;
    } else if (calculator.displayValue.includes('.')) {
        return;
    } else {
        calculator.displayValue += dot;
    }
}

function handleOperator(operator) {
    const { firstOperand, displayValue, operator: currentOperator } = calculator;
    const inputValue = parseFloat(displayValue);
}

function clearDisplay() {
    calculator.displayValue = '0';
}

function deleteDigit() {
    const { displayValue } = calculator;
    calculator.displayValue = displayValue.slice(0, -1);
    if (calculator.displayValue === '') {
        calculator.displayValue = '0';
    }
}