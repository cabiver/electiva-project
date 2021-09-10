const Router = require('express').Router()

Router.post('/', async (req, res) => {
  res.json({ nose: 'saludos' })
})

module.exports = Router
