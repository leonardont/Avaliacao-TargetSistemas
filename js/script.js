function question1() {
    const index = 13;
    let soma = 0;
    let k = 0;
    const result = document.getElementById("result-question1");

    while (k < index) {
        k = k + 1;
        soma = soma + k;
    }

    result.textContent = `O valor da variável SOMA é de ${soma}.`;
}

function question2contains(numberinput) {
    let a = 0;
    let b = 1;
    
    while (a <= numberinput) {
        if (a === numberinput) {
            return true;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }

    return false;
}

function question2verify() {
    const informedNumber = parseInt(document.getElementById("numberinput").value);
    const result = document.getElementById("result-question2");

    if (isNaN(informedNumber)) {
        result.textContent = "Digite um número válido.";
        return;
    }

    if (question2contains(informedNumber)) {
        result.textContent = `O número ${informedNumber} pertence à sequência de Fibonacci.`;
    } else {
        result.textContent = `O número ${informedNumber} não pertence à sequência de Fibonacci.`;
    }
}

function question5invert(str) {
    if (str === undefined) {
        return "";
    }
    
    let invertedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }
    return invertedString;

}

function question5show() {
    const inputElement = document.getElementById("textinput");
    const originalString = inputElement.value;
    const invString = question5invert(originalString);
    const invStringElement = document.getElementById("result-question5");
    invStringElement.textContent = invString;
}