function attachEvents() {
    const api = "https://phonebook-nakov.firebaseio.com/phonebook.json";
    const name = document.getElementById("person");
    const phone = document.getElementById("phone");
    const createBtn = document.getElementById("btnCreate")
    const loadBtn = document.getElementById("btnLoad")
    const phonebook = document.getElementById("phonebook")

    createBtn.addEventListener("click", createContact)
    loadBtn.addEventListener("click", loadContacts)

    async function createContact() {
        let personObj = JSON.stringify({
            person: name.value,
            phone: phone.value
        })

        await fetch(api
            , {
                method: "post",
                body: personObj
            })
            .then(x => x.json())
            .catch()

        name.value = ""
        phone.value = ""
    }

    async function loadContacts() {
        while (phonebook.firstChild) {
            phonebook.removeChild(phonebook.firstChild)
        }

        await fetch(api)
            .then(x => x.json())
            .then(x => addContactToPhonebook(x))
            .catch(e => console.error(e))
    }

    async function deleteContact() {
        let key = this.value;
        console.log(key)

        await fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`, {
            method: "delete"
        })

        loadContacts()
    }

    function addContactToPhonebook(obj) {
        if (obj === null) {
            return
        }

        Object
            .keys(obj)
            .forEach(id => {
                let li = document.createElement("li")
                let btn = document.createElement("button")
                btn.textContent = "Delete";
                btn.value = id;
                btn.addEventListener("click", deleteContact)
                li.textContent = `${obj[id].person}: ${obj[id].phone} `
                li.appendChild(btn)
                phonebook.appendChild(li)
            })
    }
}

attachEvents();