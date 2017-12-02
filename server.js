// server.js
const next = require('next')
const cookieParser = require('cookie-parser');
const routes = require('./routes')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  app.render(req, res, route.page, query)
})

// With express
const express = require('express')
const session = require('express-session')

app.prepare().then(() => {
  express()
    .use(cookieParser())
    .use(session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60 * 60 * 24 * 7 * 1000 },
    }))
    .use(handler)
    .listen(3000)
})

// Without express
// const {createServer} = require('http')
// app.prepare().then(() => {
//   createServer(handler).listen(3000)
// })
