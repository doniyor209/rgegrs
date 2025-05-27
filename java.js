function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Noto'g'ri qiymat!";
    } else {
        switch (operation) {
            case "plus":
                result = num1 + num2;
                break;
            case "minus":
                result = num1 - num2;
                break;
            case "kopay":
                result = num1 * num2;
                break;
            case "bol":
                result = num2 !== 0 ? (num1 / num2).toFixed(2) : "0 ga bo'lish mumkin emas!";
                break;
        }
    }

    document.getElementById("result").textContent = result;
}

