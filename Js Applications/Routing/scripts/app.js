import { get, post, put, del } from "./requester.js"

(() => {
    const partials = {
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }

    const app = Sammy("#main", function () {
        this.use("Handlebars", "hbs");

        this.get('#/home', function (ctx) {
            getSessionInfo(ctx)
            this.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/home/home.hbs')
                })
        })

        this.get('#/about', function (ctx) {
            getSessionInfo(ctx)
            this.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/about/about.hbs')
                })
        })

        this.get('#/login', function (ctx) {
            partials['loginForm'] = './templates/login/loginForm.hbs'
            this.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/login/loginPage.hbs')
                })
        })
        this.post('#/login', function (ctx) {
            const { username, password } = ctx.params;
            post("user", 'login', { username, password }, "Basic")
                .then(data => {
                    const { username, _kmd: { authtoken: token } } = data
                    sessionStorage.setItem('authtoken', token)
                    sessionStorage.setItem('username', username)
                    this.redirect('#/home')
                })
                .catch(e => console.log(e))

        })

        this.get('#/register', function (ctx) {
            getSessionInfo(ctx)
            partials['registerForm'] = './templates/register/registerForm.hbs'
            this.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/register/registerPage.hbs')
                })
        })

        this.post('#/register', function (ctx) {
            const { username, password, repeatPassword } = ctx.params;
            if (password === repeatPassword) {
                post("user", "", { "username": username, "password": password }, "Basic")
                    .then(x => {
                        console.log(x)
                        ctx.redirect('#/home')
                    })
                    .catch(e => console.log(e))
            }
        })

        this.get('#/logout', function (ctx) {
            sessionStorage.clear();
            ctx.redirect('#/home')
        })

        this.get('#/catalog', function (ctx) {
            getSessionInfo(ctx)
            partials['team'] = './templates/catalog/team.hbs'

            get('appdata', 'teams', 'Kinvey')
                .then(data => {
                    ctx.teams = data
                    this.loadPartials(partials)
                        .then(function () {
                            this.partial('./templates/catalog/teamCatalog.hbs')
                        })
                })
                .catch(e => console.log(e))
        })

        this.get('#/catalog/:teamId', function (ctx) {
            getSessionInfo(ctx)
            const id = ctx.params.teamId;
            partials['teamMember'] = './templates/catalog/teamMember.hbs'
            partials['teamControls'] = './templates/catalog/teamControls.hbs'

            get('appdata', `teams/${id}`, 'Kinvey')
                .then(data => {
                    ctx.name = data.name
                    ctx.description = data.description
                    
                    this.loadPartials(partials)
                        .then(function () {
                            this.partial('./templates/catalog/details.hbs')
                        })
                }).catch(e => console.log(e))

        })

        this.get('#/create', function (ctx) {
            getSessionInfo(ctx)
            partials['createForm'] = './templates/create/createForm.hbs'

            this.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/create/createPage.hbs')
                })
        })

        this.post('#/create', function (ctx) {
            const { name, description } = ctx.params;

            post('appdata', 'teams', { name, description }, "Kinvey")
                .then(x => {
                    ctx.redirect('#/catalog')
                })
                .catch(e => console.log(e))
        })

        this.get('#/catalog', function (ctx) {
            getSessionInfo(ctx)

        })
    });

    function getSessionInfo(ctx) {
        ctx.loggedIn = sessionStorage.getItem('authtoken') !== null
        ctx.username = sessionStorage.getItem('username')
    }

    app.run()
})()