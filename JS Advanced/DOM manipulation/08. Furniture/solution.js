function solve() {
  let btns = document.querySelectorAll("div#exercise button")
  let generateBtn = btns[0];
  let buyBtns = btns[1];

  generateBtn.addEventListener("click", addFurniture)
  buyBtns.addEventListener("click", buyFurniture)

  function addFurniture() {
    let input = document.querySelector("div#exercise textarea").value
    let objs = (JSON.parse(input))
    let table = document.querySelector("table.table tbody")

    for (let obj of objs) {
      let tr = document.createElement("tr")
      let img = document.createElement("td");
      let name = document.createElement("td");
      let price = document.createElement("td");
      let factor = document.createElement("td");
      let checkBox = document.createElement("td");
      img.innerHTML = `<img src="${obj["img"]}">`;
      name.innerHTML = `<p>${obj["name"]}</p>`;
      price.innerHTML = `<p>${obj["price"]}</p>`;
      factor.innerHTML = `<p>${obj["decFactor"]}</p>`
      checkBox.innerHTML = `<input type="checkbox"/>`
      tr.appendChild(img);
      tr.appendChild(name);
      tr.appendChild(price);
      tr.appendChild(factor);
      tr.appendChild(checkBox);
      table.appendChild(tr);
    }
  }


  function buyFurniture() {
    let checkboxes = document.querySelectorAll("input:checked")

    let selectedFurnitureArr = [];
    let totalSum = 0;
    let totalFactor = 0;

    for (let box of checkboxes) {
      let parentTr = box.parentNode.parentNode;

      let tdS = parentTr.querySelectorAll("td")

      let name = tdS[1].innerText
      let sum = tdS[2].innerText
      let factor = tdS[3].innerText

      selectedFurnitureArr.push(name)
      totalSum += Number(sum)
      totalFactor += Number(factor)


    }
    let avgFactor = (totalFactor / (selectedFurnitureArr.length));

    let result = `Bought furniture: ${selectedFurnitureArr.join(", ")}\n`
      + `Total price: ${totalSum.toFixed(2)}\n`
      + `Average decoration factor: ${avgFactor}`
      
    let textarea = document.querySelectorAll("div#exercise textarea")[1];

    textarea.value = result;
  }
}