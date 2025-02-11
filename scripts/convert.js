// converter.js
document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('input-value');
    const inputUnit = document.getElementById('input-unit');
    const outputUnit = document.getElementById('output-unit');
    const convertButton = document.getElementById('convert-button');
    const outputField = document.getElementById('output-value');

    function convertUnits(value, fromUnit, toUnit) {
        if (fromUnit === 'kg' && toUnit === 'lb') {
            return value * 2.20462; // 1 kg = 2.20462 lb
        } else if (fromUnit === 'lb' && toUnit === 'kg') {
            return value / 2.20462; // 1 lb = 0.453592 kg
        } else {
            return value; // No conversion needed if units are the same
        }
    }

    convertButton.addEventListener('click', function() {
        const inputValue = parseFloat(inputField.value);
        if (isNaN(inputValue)) {
            outputField.textContent = 'Por favor, ingrese un número válido';
            return;
        }

        const inputUnitValue = inputUnit.value;
        const outputUnitValue = outputUnit.value;
        const convertedValue = convertUnits(inputValue, inputUnitValue, outputUnitValue);
        outputField.textContent = `Resultado: ${convertedValue.toFixed(2)}`;
    });
});
