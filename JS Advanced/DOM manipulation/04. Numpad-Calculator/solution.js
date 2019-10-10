function solve() {
    let expression = document.querySelector("div.top p#expressionOutput")
    let result = document.querySelector("div.top p#resultOutput")
    document.querySelector("button.clear").addEventListener("click", clear)
    const regex = /[-/x+]/

    document.querySelector("div.keys")
        .addEventListener("click", (e) => {
            let target = e.target.innerHTML;

            if (target !== "=" && !regex.exec(target)) {
                expression.innerHTML += e.target.innerHTML
            } else if (regex.exec(target)) {
                expression.innerHTML += ` ${target} `
            } else if (target === "=") {
                calculate(expression.innerHTML);
            }
        })

    function clear() {
        expression.innerHTML = "";
        result.innerHTML = "";
    }

    function calculate(expr) {
        let args = expr.split(" ")
            .filter(x => x !== "")

        let a = Number(args[0]);
        let operation = args[1];
        let b = Number(args[2]);

        if (operation === "+") {
            result.innerHTML = a + b
        } else if (operation === "-") {
            result.innerHTML = a - b
        } else if (operation === "x") {
            result.innerHTML = a * b
        } else if (operation === "/") {
            result.innerHTML = a / b
        }
    }
}
