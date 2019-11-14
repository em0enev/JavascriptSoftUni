function attachEvents() {
    const url = `https://rest-messanger.firebaseio.com/messanger.json`;
    const sendBtn = document.getElementById("submit")
    const refreshBtn = document.getElementById("refresh")
    const name = document.getElementById("author")
    const msg = document.getElementById("content")
    const messages = document.getElementById("messages")

    sendBtn.addEventListener("click", sendMsg);
    refreshBtn.addEventListener("click", refreshMsg)

    function sendMsg() {
        let obj = JSON.stringify({
            author: name.value,
            content: msg.value
        })
        fetch(url,
            {
                method: "post",
                body: obj
            })
            .catch(e => console.log(e))
    }

    function refreshMsg() {
        fetch(url)
            .then(x => x.json())
            .then(x => displayMsg(x))
            .catch(e => console.error(e))
    }

    function displayMsg(obj) {
        Object
            .values(obj)
            .forEach(msg => {
                let { author, content } = msg;
                messages.textContent += `${author}: ${content}\n`
            })
    }
}

attachEvents();