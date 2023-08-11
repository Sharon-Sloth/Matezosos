const calculateButton = document.getElementById("calculate");
const operand1Input = document.getElementById("operand1");
const operand2Input = document.getElementById("operand2");
const operatorSelect = document.getElementById("operador");
const resultDiv = document.getElementById("result");
const borrarBtn = document.getElementById("borrarBtn");

calculateButton.addEventListener("click", () => {
    const operand1 = parseInt(operand1Input.value, 10);
    const operand2 = parseInt(operand2Input.value, 10);
    const operator = operatorSelect.value;

    if (isNaN(operand1) || isNaN(operand2)) {
        resultDiv.textContent = "Por favor, ingrese números válidos en ambos campos.";
        return;
    }

    if (!Number.isInteger(operand1) || !Number.isInteger(operand2)) {
        resultDiv.textContent = "Por favor, ingrese números enteros en ambos campos.";
        return;
    }

    let result;

    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        case "/":
            if (operand2 === 0) {
                resultDiv.textContent = "No se puede dividir por cero.";
                return;
            }
            result = operand1 / operand2;
            break;
        default:
            resultDiv.textContent = "Operador no válido";
            return;
    }

    if (result < 0) {
        resultDiv.textContent = "Error: El resultado es negativo.";
    } else {
        resultDiv.textContent = `Resultado: ${result}`;
    }
});

borrarBtn.addEventListener("click", () => {
    operand1Input.value = "";
    operand2Input.value = "";
    resultDiv.textContent = "";
});