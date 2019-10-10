function solve() {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let input = document.querySelector("div#exercise input");
    let list = document.querySelectorAll("div#exercise div ol li")

    document.querySelector("div#exercise button")
        .addEventListener("click", addNameToList)

    function addNameToList() {
        let name = input.value;
        let firstChar = name[0].toLowerCase();
        let index = alphabet.indexOf(firstChar)

        name = name[0].toUpperCase() + name.substring(1).toLowerCase();

        let names = list[index].innerHTML.split(", ")
        names.push(name)
        
        list[index].innerHTML = names.filter(x => x !== "").join(', ')
    }
}