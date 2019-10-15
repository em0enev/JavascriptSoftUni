function subtract() {
    let x = document.querySelector("div#wrapper input#firstNumber").value
    let y = document.querySelector("div#wrapper input#secondNumber").value

    document.querySelector("div#result").textContent = Number(x) - Number(y)
}