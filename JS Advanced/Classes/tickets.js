function solve(input, order) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination,
                this.price = Number(price),
                this.status = status
        }
    }

    return input
        .reduce((prev, line) => {
            let [destination, price, status] = line.split('|');
            let ticket = new Ticket(destination, price, status);

            prev.push(ticket);

            return prev;
        }, [])
        .sort((a, b) => {
            if (typeof a[order] === "string") {
               return a[order].localeCompare(b[order])
            } else {
               return a[order] - b[order]
            }
        })
}


console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
))