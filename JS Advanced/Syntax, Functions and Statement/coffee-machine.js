function solve(input) {
    
    const priceList = {
        "coffee caffeine": 0.80,
        "coffee decaf": 0.90,
        "tea": 0.80
    }

    let income = 0;

    for (let i = 0; i < input.length; i++) {
        let splittedOrder = input[i].split(", ");
        let coinsInserted = splittedOrder.shift();
        let drink = splittedOrder.shift();
        let orderedDrink;
        let totalSum = 0;

        if (drink === "coffee") {
            orderedDrink = `${drink} ${splittedOrder[0]}`;
            totalSum += priceList[orderedDrink];
        } else {
            orderedDrink = `${drink}`;
            totalSum += priceList[orderedDrink]
        }

        if (splittedOrder.includes("milk")) {
            let milkPrice = Math.round((totalSum * 0.1) * 10) / 10
            totalSum += milkPrice
        }

        if (Number(splittedOrder.pop())) {
            totalSum += 0.1;
        }

        if (coinsInserted >= totalSum) {
            console.log(`You ordered ${drink}. Price: $${totalSum.toFixed(2)} Change: $${(coinsInserted - totalSum).toFixed(2)}`)
            income += totalSum;
        } else {
            console.log(`Not enough money for ${drink}. Need $${(totalSum - coinsInserted).toFixed(2)} more.`)
        }
    }
    console.log(`Income Report: $${income.toFixed(2)}`)
}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']);