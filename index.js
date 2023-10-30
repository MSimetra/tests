'use stict'

const express = require('express');
const app = express();

const endpoints = {
  getUser: {
    method: 'get',
    handler: (req, res, next) => {
      res.status(200).send('<h1>User found</h1>')
    }
  },
  addUser: {
    method: 'post',
    handler: (req, res, next) => {
      res.status(200).send('<h1>User added</h1>')
    }
  }
}

const start = () => {
  for (const endpoint in endpoints) {
    const method = endpoints[endpoint].method;
    const resourse = `/${endpoint}`
    app[method](resourse, endpoints[endpoint].handler)
  }

  app.all('*', (req, res) => {
    res.status(404).send('<h1>Route does not exist</h1>')
  })
  app.listen(3000, () => console.log("Server is running"));
}

start();