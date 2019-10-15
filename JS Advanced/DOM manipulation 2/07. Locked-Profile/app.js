function lockedProfile() {
    Array.from(document.querySelectorAll("div.profile button"))
        .map(x => x.addEventListener("click", triggerBtn))

    function triggerBtn() {
        let profile = this.parentNode;
        let hiddenDiv = profile.querySelector("div");
        let inputValue = profile.querySelector("input:checked").value

        if (inputValue === "unlock" && hiddenDiv.style.display === "") {
            hiddenDiv.style.display = "block"
            this.textContent = "Hide it"
        } else if (inputValue === "unlock" && hiddenDiv.style.display === "block") {
            hiddenDiv.style.display = ""
        }
    }
}