// server.js
const next = require('next')
const qs = require('querystring')
const cookieParser = require('cookie-parser')
const routes = require('./routes')
const Rollbar = require('rollbar')

require('dotenv').config()

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)

const rollbar = new Rollbar(process.env.ROLLBAR_TOKEN)

// With express
const express = require('express')
const session = require('express-session')
const favicon = require('express-favicon')

app.prepare().then(() => {
  const server = express()
    .use(cookieParser())
    .use(favicon(`${__dirname}/static/favicon.ico`))
    .use(session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60 * 60 * 24 * 7 * 1000 },
    }))
    .use(rollbar.errorHandler())


  server.get('/redefinir-senha', (req, res) => {
    const { query } = req

    res.redirect(301, `/password?${qs.stringify(query)}`)
  })

  server.use(handler)

  server.listen(process.env.PORT || 3000)
})

// Without express
// const {createServer} = require('http')
// app.prepare().then(() => {
//   createServer(handler).listen(3000)
// })
