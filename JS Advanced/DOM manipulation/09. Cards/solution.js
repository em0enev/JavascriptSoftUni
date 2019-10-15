function solve() {
   Object.values(document.querySelectorAll("section.cards div#player1Div"))
      .map(x => x.addEventListener("click", e => openCard(e)));

   Object.values(document.querySelectorAll("section.cards div#player2Div"))
      .map(x => x.addEventListener("click", e => openCard(e)))

   let history = [];
   let result = document.querySelectorAll("section.cards div#result span")
   let isClicked1 = false;
   let isClicked2 = false;

   function openCard(e) {
      if (e.target.parentElement.attributes.id.value === "player1Div") {
         isClicked1 = true;
         result[0].textContent = e.target.name
         e.target.src = "images/whiteCard.jpg"
      } else {
         isClicked2 = true;
         result[2].textContent = e.target.name
         e.target.src = "images/whiteCard.jpg"
      }

      if (isClicked1 && isClicked2) {
         isClicked1 = false;
         isClicked2 = false;
         let card1Value = Number(result[0].innerHTML);
         let card2Value = Number(result[2].innerHTML);
         let card1 = document.querySelector(`div#player1Div [name="${card1Value}"]`)
         let card2 = document.querySelector(`div#player2Div [name="${card2Value}"]`)

         if (card1Value > card2Value) {
            card1.style.border = "2px solid green"
            card2.style.border = "2px solid red"
         } else if (card1Value < card2Value) {
            card2.style.border = "2px solid green"
            card1.style.border = "2px solid red"
         } 

         let a = `[${card1Value} vs ${card2Value}] `
         history.push(a)
         
         let resultDiv = document.querySelector("div#history");
         resultDiv.textContent = history.join("")
      }
   }
}