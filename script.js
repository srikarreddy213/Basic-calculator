// script.js

document.addEventListener('DOMContentLoaded', function () {
    const inputA = document.getElementById('inputA');
    const inputB = document.getElementById('inputB');
    const result = document.getElementById('result');

    function getValues() {
        const a = parseFloat(inputA.value);
        const b = parseFloat(inputB.value);
        return { a, b };
    }

    function setResult(value) {
        result.textContent = value;
    }

    function validateInputs() {
        if (inputA.value === '' || inputB.value === '') {
            setResult('—');
            return false;
        }
        return true;
    }

    document.getElementById('add-btn').onclick = function () {
        if (!validateInputs()) return;
        const { a, b } = getValues();
        setResult((a + b).toLocaleString());
    };
    document.getElementById('sub-btn').onclick = function () {
        if (!validateInputs()) return;
        const { a, b } = getValues();
        setResult((a - b).toLocaleString());
    };
    document.getElementById('mul-btn').onclick = function () {
        if (!validateInputs()) return;
        const { a, b } = getValues();
        setResult((a * b).toLocaleString());
    };
    document.getElementById('div-btn').onclick = function () {
        if (!validateInputs()) return;
        const { a, b } = getValues();
        if (b === 0) {
            setResult('∞');
        } else {
            setResult((a / b).toLocaleString());
        }
    };
    document.getElementById('mod-btn').onclick = function () {
        if (!validateInputs()) return;
        const { a, b } = getValues();
        if (b === 0) {
            setResult('NaN');
        } else {
            setResult((a % b).toLocaleString());
        }
    };

    // Optional: Reset result on input change
    inputA.addEventListener('input', () => setResult('0'));
    inputB.addEventListener('input', () => setResult('0'));
});