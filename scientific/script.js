function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let input = document.getElementById('display').value;
    let result;

    try {
        result = eval(input);
    } catch (e) {
        result = 'Error';
    }

    document.getElementById('display').value = result;
}
