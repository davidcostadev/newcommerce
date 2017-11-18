// server.js
const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app, ({req, res, route, query}) => {
  app.render(req, res, route.page, query)
})

// With express
const express = require('express')
app.prepare().then(() => {
  express().use(handler).listen(3000)
})

// Without express
// const {createServer} = require('http')
// app.prepare().then(() => {
//   createServer(handler).listen(3000)
// })
