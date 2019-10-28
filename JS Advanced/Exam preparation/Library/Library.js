class Library {
    constructor(libraryName) {
        this.libraryName = libraryName,
            this.subscribers = [],
            this.subscriptionTypes = {
                "normal": this.libraryName.length,
                "special": this.libraryName.length * 2,
                "vip": Number.MAX_SAFE_INTEGER
            }
    }

    subscribe(name, type) {
        if (!Object.keys(this.subscriptionTypes).includes(type)) {
            throw Error(`The type ${type} is invalid`)
        }

        let personFromSubs = this.subscribers.find(x => x.name === name)

        if (personFromSubs) {
            personFromSubs.type = type
            return personFromSubs
        } else {
            let person = {
                "name": name,
                "type": type,
                books: []
            }

            this.subscribers.push(person);
            return person;
        }
    }

    unsubscribe(name) {
        let personFromSubs = this.subscribers.find(x => x.name === name)

        if (!personFromSubs) {
            throw Error(`There is no such subscriber as ${name}`)
        }

        this.subscribers.splice(this.subscribers.indexOf(personFromSubs), 1)
        return this.subscribers
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let personFromSubs = this.subscribers.find(x => x.name === subscriberName)

        if (!personFromSubs) {
            throw Error(`There is no such subscriber as ${subscriberName}`)
        }

        if (this.subscriptionTypes[personFromSubs.type] > personFromSubs.books.length) {
            let book = {
                title: bookTitle,
                author: bookAuthor
            }
            personFromSubs.books.push(book)
            return personFromSubs;
        }
        else {
            throw Error(`You have reached your subscription limit ${this.subscriptionTypes[personFromSubs.type]}!`)
        }
    }

    showInfo() {

        if (Array.from(this.subscribers).length === 0) {
            return `${this.libraryName} has no information about any subscribers`
        }
        
        let result = "";
        for (const person of Array.from(this.subscribers)) {
            result += `Subscriber: ${person.name}, Type: ${person.type}\nReceived books: `
            result += person.books.map(x => `${x.title} by ${x.author}`).join(", ")
            result += "\n"
        }
        return result.trim();
    }
}
let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

console.log(lib.showInfo());

