// calculadora.js
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.calc-button');
    const screen = document.getElementById('calc-screen');
    let currentInput = '';
    let previousInput = '';
    let operator = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (value === 'C') {
                // Clear everything
                currentInput = '';
                previousInput = '';
                operator = null;
                screen.textContent = '0';
            } else if (value === '=') {
                // Perform calculation
                if (currentInput !== '' && previousInput !== '' && operator !== null) {
                    const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
                    screen.textContent = result;
                    previousInput = result.toString();
                    currentInput = '';
                    operator = null;
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                // Set operator
                if (currentInput !== '') {
                    if (previousInput !== '') {
                        const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
                        screen.textContent = result;
                        previousInput = result.toString();
                    } else {
                        previousInput = currentInput;
                    }
                    currentInput = '';
                    operator = value;
                }
            } else {
                // Update current input
                currentInput += value;
                screen.textContent = currentInput;
            }
        });
    });

    function calculate(a, b, operator) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return 0;
        }
    }
});
