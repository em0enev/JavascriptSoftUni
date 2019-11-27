const input = document.getElementById("towns")
const div = document.getElementById("root")

document.getElementById("btnLoadTowns")
    .addEventListener("click", displayTowns)

async function displayTowns() {
    let towns = input.value.split(", ")

    let template = await fetch("./towns.hbs")
        .then(res => res.text())

    let compiled = Handlebars.compile(template);
    let data = compiled({ towns })
    div.innerHTML = data
}