function addItem() {
    let text = document.querySelector("article input#newItemText");
    let value = document.querySelector("article input#newItemValue");
    let selectMenu = document.querySelector("article div select#menu");

    let opt = document.createElement('option');
    opt.value = value.value;
    opt.textContent = text.value;

    selectMenu.appendChild(opt)

    text.value = "";
    value.value = "";
}