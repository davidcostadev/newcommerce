// server.js
const next = require('next')
const qs = require('querystring')
const cookieParser = require('cookie-parser')
const routes = require('./routes')
require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
})

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)

// With express
const express = require('express')
const session = require('express-session')

app.prepare().then(() => {
  const server = express()
    .use(cookieParser())
    .use(session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60 * 60 * 24 * 7 * 1000 },
    }))


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
