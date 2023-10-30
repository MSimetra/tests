'use stict'

const userService = require('./userService');
const express = require('express');
const app = express();

const endpoints = {
  getUser: {
    method: 'get',
    handler: (args) => userService.getUser(args)
  },
  addUser: {
    method: 'post',
    handler: (args) => userService.addUser(args)
  }
}

const start = () => {
  for (const endpoint in endpoints) {
    const method = endpoints[endpoint].method;
    const resourse = `/${endpoint}`
    app[method](resourse, (req, res, next) => {
      const response = endpoints[endpoint].handler(req.body || req.params)
      res.send(response)
    })
  }

  app.all('*', (req, res) => {
    res.status(404).send('<h1>Route does not exist</h1>')
  })
  app.listen(3000, () => console.log("Server is running"));
}

start();