function solve() {
   const sendBtn = document.getElementById("send");

   sendBtn.addEventListener("click", sendMessage);
}

function sendMessage() {
   let inputMsg = document.getElementById("chat_input")
   let parentDiv = document.getElementById("chat_messages")

   if (inputMsg === null || parentDiv === null) {
      throw new Error("missing element")
   }

   let newMsg = document.createElement("div");

   newMsg.innerHTML = inputMsg.value;
   newMsg.classList.add("message", "my-message")

   parentDiv.appendChild(newMsg)
   inputMsg.value = "";
}
