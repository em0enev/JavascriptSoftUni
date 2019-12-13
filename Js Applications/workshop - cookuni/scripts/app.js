import { get, post, put, del } from './requester.js'

(() => {
    const partials = {
        header: './views/common/header.hbs',
        footer: './views/common/footer.hbs'
    }

    const app = Sammy('#rooter', function () {
        this.use('Handlebars', 'hbs')

        this.get('/', function (ctx) {
            getSessionInfo(ctx);
            get('appdata', 'recipes', 'Kinvey')
                .then((data) => {
                    if (data.length > 0) {
                        ctx.recipes = data
                        ctx.hasRecipes = true;
                    }
                    this.loadPartials(partials)
                        .then(function () {
                            this.partial('./views/home/home.hbs')
                        });
                });
        });

        this.get('/login', function (ctx) {
            partials['loginForm'] = './views/login/loginForm.hbs'
            this.loadPartials(partials)
                .then(function () {
                    this.partial('./views/login/loginPage.hbs')
                });
        });

        this.post('/login', function (ctx) {
            const { username, password } = ctx.params;
            post("user", 'login', { username, password }, "Basic")
                .then(data => {
                    const { username, _kmd: { authtoken: token }, firstName, lastName } = data
                    sessionStorage.setItem('authtoken', token)
                    sessionStorage.setItem('username', username)
                    sessionStorage.setItem('fullName', `${firstName} ${lastName}`)
                    this.redirect('/')
                })
        });

        this.get('/register', function (ctx) {
            getSessionInfo(ctx)
            partials['registerForm'] = './views/register/registerForm.hbs'
            this.loadPartials(partials)
                .then(function () {
                    this.partial('./views/register/registerPage.hbs')
                })
        });

        this.post('/register', function (ctx) {
            const { username, password, repeatPassword, firstName, lastName } = ctx.params;
            if (password === repeatPassword) {
                post("user", "", { username, password, firstName, lastName }, "Basic")
                    .then(x => {
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

        this.get('/share', function (ctx) {
            getSessionInfo(ctx)
            partials['recipeForm'] = './views/recipe/recipeForm.hbs'
            this.loadPartials(partials)
                .then(function () {
                    this.partial('./views/recipe/recipePage.hbs')
                })
        });

        this.post('/share', function (ctx) {
            let { meal, ingredients, prepMethod, description, category, foodImageURL, categoryImageURL, likesCounter } = ctx.params;

            post("appdata", "recipes", { meal, ingredients: ingredients.split(" "), prepMethod, description, category, foodImageURL, categoryImageURL, likesCounter }, "Kinvey")
                .then(() => {
                    this.redirect('/')
                })
        });

        this.get('/recipe/:id', function (ctx) {
            getSessionInfo(ctx)
            const id = ctx.params.id;
            get('appdata', `recipes/${id}`, 'Kinvey')
                .then(data => {
                    ctx.recipe = data;
                    this.loadPartials(partials)
                        .then(function () {
                            this.partial('../views/recipe/recipeDetails.hbs')
                        })
                })
        })

        this.get('/edit/:id', function (ctx) {
            getSessionInfo(ctx)
            const id = ctx.params.id;
            get('appdata', `recipes/${id}`, 'Kinvey')
                .then(recipeInfo => {
                    ctx.params = recipeInfo
                    ctx.params.ingredients = recipeInfo.ingredients.join(', ')
                    this.loadPartials(partials)
                        .then(function () {
                            this.partial('../views/recipe/recipeEdit.hbs')
                        })
                })
        })

        this.post('/edit/:id', function (ctx) {
            const id = ctx.params.id;
            let { meal, ingredients, prepMethod, description, category, foodImageURL, categoryImageURL } = ctx.params;
            console.log(ctx.params)
            put("appdata", `recipes/${id}`, { meal, ingredients: ingredients.split(" "), prepMethod, description, category, foodImageURL, categoryImageURL }, "Kinvey")
                .then((x) => {
                    console.log(x)
                    this.redirect('/')
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