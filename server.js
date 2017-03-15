require('babel-register')

const express = require('express'),
  React = require('react'),
  ReactDOMServer = require('react-dom/server'),
  ReactRouter = require('react-router')
  ServerRouter = ReactRouter.ServerRouter,
  _ = require('lodash'),
  fs = require('fs'),
  PORT = 5050,
  baseTemplate = fs.readFileSync('./index.html'),
  template = _.template(baseTemplate),
  App = require('./js/App').default;

const server = express()

server.use('/public', express.static('./public'))

server.use((req, res) => {
  const context = ReactRouter.createServerRenderContext()
  const body = ReactDOMServer.renderToString(
    React.createElement(ServerRouter, {location: req.url, 
      context: context},
      React.createElement(App))
  )

  res.write(template({body: body}))
  res.end()
})

console.log('listening on port', PORT)
server.listen(PORT)
