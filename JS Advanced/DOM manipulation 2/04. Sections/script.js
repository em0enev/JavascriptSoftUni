function create(words) {
   let content = document.querySelector("div#content")

   for (let text of words) {
      let div = document.createElement("div");
      div.addEventListener("click", showParagraph)
      let p = document.createElement("p");
      p.style.display = "none"
      p.textContent = text;
      div.appendChild(p);
      content.appendChild(div)
   }

   function showParagraph() {
      let paragraph = this.querySelector("p")
      paragraph.style.display = "block"
   }

}