function solve() {
    const inputs = document.querySelectorAll("form input");
    const addBtn = document.querySelector("form button");
    const bookShelfs = document.getElementsByClassName("bookShelf")
    let totalSum = 0;

    addBtn.addEventListener("click", function (e) {
        e.preventDefault()
        let title = inputs[0].value;
        let year = inputs[1].value;
        let price = inputs[2].value;

        if (title !== "" && Number(year) > 0 && Number(price) > 0) {
            if (year >= 2000) {
                createBook(title, Number(price), year, true)
            } else {
                createBook(title, Number(price), year, false)
            }
        }
    })

    function createBook(title, price, year, isNewBook) {
        let shelf = isNewBook ? bookShelfs[1] : bookShelfs[0]

        let btnPrice = document.createElement("button")
        price = isNewBook ? price.toFixed(2) : (price * 0.85).toFixed(2)

        let div = document.createElement("div")
        div.classList.add("book")
        let pTitle = document.createElement("p")
        pTitle.textContent = `${title} [${year}]`;
        btnPrice.textContent = `Buy it only for ${price} BGN`

        div.appendChild(pTitle)
        div.appendChild(btnPrice)

        if (isNewBook) {
            let btnMove = document.createElement("button")
            btnMove.textContent = "Move to old section"
            div.appendChild(btnMove)
            btnMove.addEventListener("click", move)
        }

        btnPrice.addEventListener("click", buy);
        
        shelf.appendChild(div)
    }

    function buy() {
        let totalStoreProfit = document.querySelectorAll("h1")[1];

        let price = this.textContent.split(" ")[4]
        totalSum += Number(price)
        totalStoreProfit.textContent = `Total Store Profit: ${totalSum.toFixed(2)} BGN`
        this.parentNode.remove()
    }

    function move() {
        bookShelfs[0].appendChild(this.parentNode)
        let btns = this.parentNode.querySelectorAll("button");
        let price = btns[0].textContent.split(" ")[4]

        btns[0].textContent = `Buy it only for ${(Number(price) * 0.85).toFixed(2)} BGN`
        btns[1].remove()
    }
}