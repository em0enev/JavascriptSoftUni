function solve() {
   let tds = document.querySelectorAll("tbody tr")

   document.querySelector("#searchBtn")
      .addEventListener("click", search)

   function search() {
      let input = document.querySelector("input").value

      for (let tr of tds) {
         let isContain = tr.innerHTML.includes(input)

         if (isContain) {
            tr.classList.add("select")
         }
      }
   }
}