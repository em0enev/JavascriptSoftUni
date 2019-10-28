class Kitchen {

    constructor(budget) {
        this.budget = Number(budget),
            this.menu = {},
            this.productsInStock = {},
            this.actionsHistory = []
    }

    loadProducts(products) {
        for (let line of products) {
            let arr = line.split(" ");
            let price = arr.pop();
            let q = arr.pop();
            let name = arr.join(" ")
            let enoughMoney = this.budget - (Number(price)) >= 0

            if (enoughMoney) {
                if (this.productsInStock[name]) {
                    this.productsInStock[name] += Number(q)
                } else {
                    this.productsInStock[name] = Number(q);
                }
                this.budget -= Number(price)
                this.actionsHistory.push(`Successfully loaded ${q} ${name}`)
            } else {
                this.actionsHistory.push(`There was not enough money to load ${q} ${name}`)
            }
        }
        return this.actionsHistory.join("\n")
    }

    addToMenu(meal, neededProduct, price) {
        let result;

        if (!this.menu[meal]) {

            this.menu[meal] = [neededProduct, Number(price)];

            result = `Great idea! Now with the ${meal} we have ${this.menu.length} meals on the menu, other ideas?`
        } else {
            result = `The ${meal} is already in our menu, try something different.`
        }
        return result;
    }

    showTheMenu() {
        let result = "";

        if (Object.keys(this.menu).length > 0) {
            for (let [key, val] of Object.entries(this.menu)) {
                result += `${key} - $ ${val[1]}\n`
            }
        } else {
            result = "Our menu is not ready yet, please come later...";
        }

        return result.trim();
    }

    makeTheOrder(meal) {
        let mealFromMenu = this.menu[meal];

        if (!mealFromMenu) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let ingredients = this.menu[meal][0];
            for (let ingredient of ingredients) {
                let arr = ingredient.split(" ")
                let quantity = arr.pop();
                let name = arr.join(" ");
                if (this.productsInStock[name] < Number(quantity) || !this.productsInStock[name]) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                }
            }

            for (let ingredient of ingredients) {
                let [name, quantity] = ingredient.split(" ")
                this.productsInStock[name] -= Number(quantity)
            }
            this.budget += Number(this.menu[meal][1])

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal][1]}.`
        }
    }
}


let kitchen = new Kitchen(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.loadProducts(['Flour 0.5 1', 'Oil 0.2 1', 'Yeast 0.5 1', 'Salt 0.1 1', 'Sugar 0.1 1', 'Tomato sauce 0.5 1', 'Pepperoni 1 1', 'Cheese 1.5 3']))
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.makeTheOrder("Pizza"));