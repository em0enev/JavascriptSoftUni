(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        const section = document.getElementById("allCats")
        let cats = window.cats;

        let template = await fetch("./catss.hbs")
            .then(res => res.text())
        let compiled = Handlebars.compile(template)
        let data = compiled({ cats })
        section.innerHTML = data;

        let btns = document.getElementsByClassName("showBtn");
        [...btns].forEach(x => x.addEventListener("click", (e) => {
            if (e.currentTarget.textContent === "Show status code") {
                x.nextElementSibling.style.display = "block"
                e.currentTarget.textContent = "Hide status code"
            } else {
                x.nextElementSibling.style.display = "none"
                e.currentTarget.textContent = "Show status code"
            }
        }))
    }
})()