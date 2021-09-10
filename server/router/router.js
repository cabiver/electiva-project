const Router = require('express').Router()

Router.get('/saludos', async (req, res) => {
  res.send({ nose: 'saludos' })
})

module.exports = Router
