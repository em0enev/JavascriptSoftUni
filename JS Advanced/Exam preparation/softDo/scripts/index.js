// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!


// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution() {
    document.querySelector("section#inputSection div button")
        .addEventListener("click", sendMsg)

    function sendMsg() {
        let msg = document.querySelector("section#inputSection textarea")
        let username = document.querySelector("section#inputSection input")

        if (msg.value === "") {
            return
        }
        let pendingQuestionDiv = document.querySelector("section#outputSection div#pendingQuestions")

        let div = document.createElement("div");
        div.classList.add("pendingQuestion");
        div.innerHTML = `<img src="./images/user.png" width="32" height="32" />`

        let spanUserName = document.createElement("span")
        spanUserName.textContent = username.value !== "" ? username.value : "Anonymous";

        let pMsg = document.createElement("p");
        pMsg.textContent = msg.value;

        msg.value = "";
        username.value = "";

        div.appendChild(spanUserName);
        div.appendChild(pMsg)
        div.innerHTML += `<div class="actions"><button class="archive">Archive</button><button class="open">Open</button></div>`
        pendingQuestionDiv.appendChild(div)

        div.querySelector("button.archive")
            .addEventListener("click", () => {
                div.remove()
            })

        div.querySelector("button.open")
            .addEventListener("click", openQuestion)
    }

    function openQuestion() {
        let openQuestionDiv = document.querySelector("div#openQuestions")
        let parentDiv = this.parentNode.parentNode;

        let img = parentDiv.children[0]
        let username = parentDiv.children[1]
        let msg = parentDiv.children[2];

        let div = document.createElement("div");
        div.classList.add("openQuestion");

        div.appendChild(img)
        div.appendChild(username)
        div.appendChild(msg)
        div.innerHTML += `<div class="actions"><button class="reply">Reply</button></div><div class="replySection" style="display: none;"><input class="replyInput" type="text" placeholder="Reply to this question here..."><button class="replyButton">Send</button><ol class="reply" type="1"></ol></div>`
        openQuestionDiv.appendChild(div)
        parentDiv.remove()

        div.querySelector("div.openQuestion div.actions button.reply")
            .addEventListener("click", reply)
    }

    function reply() {
        let parent = this.parentNode.parentNode;
        let replyDiv = parent.querySelector("div.replySection")

        if (replyDiv.style.display === "none") {
            replyDiv.style.display = "block"
            this.innerText = "Back"
        } else {
            replyDiv.style.display = "none"
            this.innerText = "Reply"
        }

        replyDiv.querySelector("button.replyButton")
            .addEventListener("click", () => {
                let replyMsg = replyDiv.children[0]
                if (replyMsg.value === "") {
                    return
                }
                let li = document.createElement("li");
                li.textContent = replyMsg.value;
                replyDiv.children[2].appendChild(li);
                replyMsg.value = "";
            })
    }
}