function toggle() {
    let btn = document.querySelector("div#accordion div.head span.button");
    let text = document.querySelector("div#accordion div#extra");
    if (text.style.display === ""){
        text.style.display = "none"
    }
    
    console.log(text.style.display)
    if (text.style.display === "none") {
        text.style.display = "block"
        btn.textContent = "Less"
    } else {
        text.style.display = "none"
        btn.textContent = "More"
    }
}