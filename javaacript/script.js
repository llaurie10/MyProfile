function calculateSum () {
    const num1 = parseFloat (document.getElementById("number1").value);
    const num2 = parseFloat (document.getElementById("number2").value);
    const result = document.getElementById("Result");

    const calculateSum = num1 + num2;
    result.textContent = `Result: ${sum}`;
}