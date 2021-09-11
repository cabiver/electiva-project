const Router = require('express').Router()
const ModelSesion = require('../model/sesiones.js')

Router.post('/api/sesiones', async (req, res)=>{
  let op = req.body
  const user = await ModelSesion.findOne({usuarios: op})
  if(!user){
    res.send({mensaje: "no se ah encontrado el usuario"})
    return  
  }
  res.send({mensaje: "se encontro el usuario", user: user})
})

Router.get('/saludos', (req, res) => {
  res.send({ nose: 'saludos' })
})

module.exports = Router
