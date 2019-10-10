function solve() {
    insertOptions();

    document.querySelector("div#container button")
        .addEventListener("click", print);

}

function converter(value, option) {
    const optionsValueMap = {
        "binary": 2,
        "hexadecimal": 16
    }

    return ((value >>> 0).toString(optionsValueMap[option])).toUpperCase()
}

function print() {
    let result = document.querySelector("footer input#result")
    let a = getInputValue();
    let b = getSelectedOption();

    result.value = converter(a, b);
}

function insertOptions() {
    let menu = document.querySelector("div#container select#selectMenuTo")

    if (menu === null) {
        throw new Error("missing element")
    }

    let optionOne = document.createElement("option");
    optionOne.innerHTML = "Binary"
    optionOne.value = "binary"

    let optionTwo = document.createElement("option");
    optionTwo.innerHTML = "Hexadecimal"
    optionTwo.value = "hexadecimal"

    menu.appendChild(optionOne)
    menu.appendChild(optionTwo)
}

function getSelectedOption() {
    return menu = document
        .querySelector("div#container select#selectMenuTo")
        .value
}

function getInputValue() {
    let input = document.querySelector("div#container input")

    if (input === null) {
        throw new Error("missing element")
    }

    return input.value
}