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
            get('appdata', 'events', 'Kinvey')
                .then(events => {
                    if (events.length > 0) {
                        ctx.hasAlbums = true
                        ctx.albums = events
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
                    sessionStorage.setItem('authtoken', token)
                    sessionStorage.setItem('username', username)
                    $("#successBox").show().text('logged in').delay(5000).fadeOut();
                    this.redirect('/')
                })
        });

        this.get('/register', function (ctx) {
            getSessionInfo(ctx)
            this.loadPartials(partials)
                .then(function () {
                    this.partial('./views/register/register.hbs')
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
                    sessionStorage.clear()
                    this.redirect('/')
                })
        });

        this.get('/create-event', function (ctx) {
            getSessionInfo(ctx)
            this.loadPartials(partials)
                .then(function () {
                    this.partial('./views/event/create-event.hbs')
                })
        });

        this.post('/create-event', function (ctx) {
            let { name, dateTime, description, imageURL } = ctx.params;

            post("appdata", "events",
                {
                    name,
                    dateTime,
                    description,
                    imageURL,
                    "peopleInterestedIn": 0,
                    "organizer": sessionStorage.getItem('username')
                },
                "Kinvey")
                .then(() => {
                    this.redirect('/')
                })
        });

        this.get('/event/:id', function (ctx) {
            getSessionInfo(ctx)
            const id = ctx.params.id;

            get('appdata', `events/${id}`, 'Kinvey')
                .then(data => {
                    ctx.event = data;
                    ctx.isOrganizer = data.organizer === sessionStorage.getItem('username')
                    this.loadPartials(partials)
                        .then(function () {
                            this.partial('../views/event/details.hbs')
                        })
                })
        })

        this.get('/edit/:id', function (ctx) {
            getSessionInfo(ctx)
            const id = ctx.params.id;
            get('appdata', `events/${id}`, 'Kinvey')
                .then(eventInfo => {
                    ctx.event = eventInfo
                    this.loadPartials(partials)
                        .then(function () {
                            this.partial('../views/event/edit.hbs')
                        })
                })
        })

        this.post('/edit/:id', function (ctx) {
            const id = ctx.params.id;
            let { name, dateTime, description, imageURL, peopleInterestedIn, organizer } = ctx.params;
            put("appdata", `events/${id}`, { name, dateTime, description, imageURL, peopleInterestedIn, organizer }, "Kinvey")
                .then(() => {
                    this.redirect('/')
                })
        })

        this.post('/edit/:id', function (ctx) {
            const id = ctx.params.id;
            let { name, dateTime, description, imageURL, peopleInterestedIn, organizer } = ctx.params;
            put("appdata", `events/${id}`, { name, dateTime, description, imageURL, peopleInterestedIn, organizer }, "Kinvey")
                .then(() => {
                    this.redirect(`/event/${id}`)
                })
        })
    });

    function getSessionInfo(ctx) {
        ctx.isLoggedIn = sessionStorage.getItem('authtoken') !== null
        ctx.username = sessionStorage.getItem('username')
        ctx.fullName = sessionStorage.getItem('fullName')
    }

    app.run();
})()