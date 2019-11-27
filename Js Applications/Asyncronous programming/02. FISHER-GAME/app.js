function attachEvents() {
    const LoadCreateURL = "https://fisher-game.firebaseio.com/catches.json"
    const UpdateDeleteURl = id => `https://fisher-game.firebaseio.com/catches/${id}.json`
    const catches = document.getElementById("catches")
    loadCatchesAsync()

    const crudOperation = {
        load: loadCatchesAsync,
        add: addCatch,
        update: updateCatchAsync,
        delete: deleteCatchAsync
    }

    window.addEventListener("click", (e) => {
        let operation = e.target.className
        if (operation === "load" ||
            operation === "add" ||
            operation === "update" ||
            operation === "delete") {
            crudOperation[operation].call(undefined, e)
        }
    })

    async function loadCatchesAsync() {
        await fetch(LoadCreateURL)
            .then(x => x.json())
            .then(x => displayAllCatches(x))
            .catch(e => console.log(e))
    }

    function displayAllCatches(obj) {
        for (const catchId of Object.keys(obj)) {
            let div = createElement(catchId, obj[catchId])
            catches.appendChild(div);
        }
    }

    function createElement(catchId, params) {
        let div = document.createElement("div")
        div.classList.add("catch")
        div.setAttribute("data-id", `${catchId}`)

        div.innerHTML = `<label>Angler</label>
            <input type="text" class="angler" value="${params.angler}" />
            <hr>
            <label>Weight</label>      
            <input type="number" class="weight" value="${params.weight}" />
            <hr>
            <label>Species</label>
            <input type="text" class="species" value="${params.species}" />
            <hr>
            <label>Location</label>
            <input type="text" class="location" value="${params.location}" />
            <hr>
            <label>Bait</label>
            <input type="text" class="bait" value="${params.bait}" />
            <hr>
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${params.captureTime}" />
            <hr>
            <button class="update">Update</button>
            <button class="delete">Delete</button>`

        return div
    }

    async function addCatch() {
        const inputs = document.querySelectorAll("aside fieldset#addForm input");
        let obj = getDataFromInputForm(inputs)

        await fetch(LoadCreateURL,
            {
                method: "post",
                body: JSON.stringify(obj)
            })
            .then(x => x.json())
            .then(x => {
                let div = createElement(x.name, obj)
                catches.appendChild(div)
            })
            .catch()
    }

    async function updateCatchAsync(e) {
        let divCatch = e.target.parentNode
        let catchId = divCatch.attributes["data-id"].value
        let obj = getDataFromInputForm(divCatch.getElementsByTagName("input"))

        await fetch(UpdateDeleteURl(catchId),
            {
                method: "put",
                body: JSON.stringify(obj)
            })
            .catch(e => console.error(e))
    }

    async function deleteCatchAsync(e) {
        let catchId = e.target.parentNode.attributes["data-id"].value

        let res = await fetch(UpdateDeleteURl(catchId),
            {
                method: "delete",
            })
            .catch(e => console.error(e))

        if (res.status === 200) {
            e.target.parentNode.remove()
        }
    }

    function getDataFromInputForm(input) {
        let obj = {};
        [...input].map(e => (obj[e.className] = e.value));
        return obj;
    }
}

attachEvents();