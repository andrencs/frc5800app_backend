module.exports = app => {

    app.route('/signup')
        .post(app.api.user.save)

    app.route('/sign')
        .post(app.api.auth.signin)

    app.route('validateToken')
        .post(app.api.auth.validateToken)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.user.save)
        .get(app.api.user.getById)

}