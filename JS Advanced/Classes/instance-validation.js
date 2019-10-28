class CheckingAccount {

    constructor(clientId, email, firstName, lastName) {
        this.clientId = this.setClientId(clientId),
            this.email = this.setEmail(email),
            this.firstName = this.setName("First", firstName),
            this.lastName = this.setName("Last", lastName)
    }

    setClientId(value) {
        if (isNaN(Number(value)) || value.length !== 6) {
            throw TypeError("Client ID must be a 6-digit number")
        }
        this.clientId = value;
    }

    setEmail(email) {
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!reg.test(email)) {
            throw TypeError("Invalid e-mail")
        }
        this.email = email;
    }

    setName(name, value) {
        let regex = /^[A-z][a-z]+$/

        if (value.length < 3 || value.length > 20) {
            throw TypeError(`${name} name must be between 3 and 20 characters long`)
        }
        if (!regex.test(value)) {
            throw TypeError(`${name} name must contain only Latin characters`)
        }

        if (name === "First") {
            this.firstName = value;
        } else {
            this.lastName = value
        }
    }
}