const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando...')
})

// bcrypt-nodes
// jwt-simple
// moment
// mongoose
// node-schedule
// passport
// passport-jwt