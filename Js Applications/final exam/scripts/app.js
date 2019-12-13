import { get, post, put, del } from './requester.js'

(() => {
    const partials = {
        header: './views/common/header.hbs',
        footer: './views/common/footer.hbs'
    }

    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs')

        this.get('/', function (ctx) {
            getSessionInfo(ctx);
            get('appdata', 'treks', 'Kinvey')
                .then(treks => {
                    console.log(treks)
                    if (treks.length > 0) {
                        ctx.hasTreks = true
                        ctx.treks = treks
                    }
                    this.loadPartials(partials)
                        .then(function () {
                            this.partial('./views/home/home.hbs')
                        });
                })
        });

        this.get('/login', function (ctx) {
            this.loadPartials(partials)
                .then(function () {
                    this.partial('./views/login/login.hbs')
                });
        });

        this.post('/login', function (ctx) {
            const { username, password } = ctx.params;
            post("user", 'login', { username, password }, "Basic")
                .then(data => {
                    const { username, _kmd: { authtoken: token } } = data
                    localStorage.setItem('authtoken', token)
                    localStorage.setItem('username', username)
                    this.redirect('/')
                })
        });

        this.get('/register', function (ctx) {
            getSessionInfo(ctx)
            this.loadPartials(partials)
                .then(function () {
                    this.partial('./views/reg/reg.hbs')
                })

        });

        this.post('/register', function (ctx) {
            const { username, password, rePassword } = ctx.params;
            if (username && password && rePassword && password === rePassword) {
                post("user", "", { username, password }, "Basic")
                    .then(() => {
                        ctx.redirect('/login')
                    })
            }
        });

        this.get('/logout', function (ctx) {
            post("user", '_logout', {}, 'Kinvey')
                .then(() => {
                    localStorage.clear()
                    this.redirect('/')
                })
        });

        this.get('/create-trek', function (ctx) {
            getSessionInfo(ctx)
            this.loadPartials(partials)
                .then(function () {
                    this.partial('./views/trek/create-trek.hbs')
                })
        });

        this.post('/create-trek', function (ctx) {
            let { location, dateTime, description, imageURL } = ctx.params;
            let data = {
                location,
                dateTime,
                description,
                imageURL,
                likes: 0,
                organizer: localStorage.getItem('username')
            }

            post("appdata", "treks",
                data,
                "Kinvey")
                .then(() => {
                    console.log(data)
                    this.redirect('/')
                }).catch(e => console.log(e))
        });

        this.get('/trek/:id', function (ctx) {
            getSessionInfo(ctx)
            const id = ctx.params.id;

            get('appdata', `treks/${id}`, 'Kinvey')
                .then(data => {
                    ctx.trek = data;
                    ctx.isOrganizer = data.organizer === localStorage.getItem('username')
                    this.loadPartials(partials)
                        .then(function () {
                            this.partial('../views/trek/details.hbs')
                        })
                })
        })

        this.get('/edit/:id', function (ctx) {
            getSessionInfo(ctx)
            const id = ctx.params.id;
            get('appdata', `treks/${id}`, 'Kinvey')
                .then(trekInfo => {
                    ctx.trek = trekInfo
                    console.log(ctx.params)
                    this.loadPartials(partials)
                        .then(function () {
                            this.partial('../views/trek/edit.hbs')
                        })
                })
        })

        this.post('/edit/:id', function (ctx) {
            const id = ctx.params.id;
            let { location, dateTime, description, imageURL, likes, organizer } = ctx.params;
            let data = {
                location,
                dateTime,
                description,
                imageURL,
                likes,
                organizer
            }

            put("appdata", `treks/${id}`, data, "Kinvey")
                .then(() => {
                    this.redirect('/')
                })
        })

        this.get('/delete/:id', function (ctx) {
            const id = ctx.params.id;
            del("appdata", `treks/${id}`, "Kinvey")
                .then(() => {
                    this.redirect(`/`)
                })
        })

        this.get('/like/:id', function (ctx) {
            const id = ctx.params.id;

            get('appdata', `treks/${id}`, 'Kinvey')
                .then(data => {
                    data.likes = Number(data.likes) + 1;
                    console.log(data)
                    put("appdata", `treks/${id}`, data, "Kinvey")
                        .then(() => {
                            this.redirect(`/trek/${id}`)
                        })
                })
        })
    });

    function getSessionInfo(ctx) {
        ctx.isLoggedIn = localStorage.getItem('authtoken') !== null
        ctx.username = localStorage.getItem('username')
    }

    app.run();
})()