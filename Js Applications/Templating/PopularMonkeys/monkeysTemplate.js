import { monkeys } from "./monkeys.js"

$(() => {
    const div = document.querySelector("div.monkeys")
    const template = document.getElementById("monkey-template").innerHTML;

    let compiled = Handlebars.compile(template)
    let data = compiled({ monkeys })
    div.innerHTML = data

    $("button").click(function () {
        $(this.nextElementSibling).show("slow")
    })
})