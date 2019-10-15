function notify(message) {
    let div = document.querySelector("div#notification")
    div.textContent = message
    div.style.display = "block"
    
    setTimeout(function () {
        div.style.display = "none";
    }, 2000);
}