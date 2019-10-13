function solve() {
   let products = [];
   let totalSum = 0;

   let addBtns = document.querySelectorAll("button.add-product");
   // .forEach(x => x.addEventListener("click", e => addProduct(e))) <-- this shit doesnt work in judge ... 

   for (let i = 0; i < addBtns.length; i++) {
      addBtns[i].addEventListener("click", e => addProduct(e))
   }

   document.querySelector("button.checkout")
      .addEventListener("click", printTotal)

   function addProduct(e) {
      let productDiv = e.target.parentNode.parentNode
     
      let productName = productDiv.querySelector("div.product-details div.product-title").innerHTML
      let money = productDiv.querySelector("div.product-line-price").innerHTML

      totalSum += Number(money)
      products.push(productName);

      let addMsg = `Added ${productName} for ${money} to the cart.\n`

      document.querySelector("textarea").textContent += addMsg
   }

   function printTotal() {
      let result = `You bought ${products.join(", ")} for ${totalSum.toFixed(2)}.`
      document.querySelector("textarea").textContent += result
      disableBtns();
   }

   function disableBtns() {
      document.querySelector("button.checkout").disabled = true;

      for (let i = 0; i < addBtns.length; i++) {
         addBtns[i].disabled = true
      }
   }
}