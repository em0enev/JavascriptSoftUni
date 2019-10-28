class Forum {
    constructor() {
        this._users = [],
            this._questions = [],
            this._id = 1
    }

    register(username, password, repeatPassword, email) {
        if (username === ""
            || password === ""
            || repeatPassword === ""
            || email === "") {
            throw new Error("Input can not be empty")
        }

        if (password !== repeatPassword) {
            throw new Error("Passwords do not match")
        }

        let checkUserName = this._users.filter((w) => w.name === username)[0];
        let checkEmail = this._users.filter((w) => w.email === email)[0];

        if (!checkUserName || !checkEmail) {
            throw new Error("This user already exists!")
        }

        let user = {
            username: username,
            password: password,
            email: email
        }
        this._users.push(user)
        return `${user.username} with ${user.email} was registered successfully!`
    }

}

let forum = new Forum();


console.log(forum.register('Michael', '123', '123', 'michael@abv.bg'))
console.log(forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com'))