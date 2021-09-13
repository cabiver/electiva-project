import express from 'express'
import ModelSesion from '../model/sesiones.js'
import jwt from 'jsonwebtoken'
const Router = express.Router()
const youKnow = 'algien deme una swith por favor'

Router.post('/api/register', async (req, res)=>{
  console.log(req)
  let op = req.body
  console.log(op)
  const user = await ModelSesion.findOne({usuarios: op.usuari})
  if(!user){
    const bases = new ModelSesion({
      usuario: op.usuari,
      password: op.password
    })
    const userNew = await bases.save()
    const token = await jwt.sign({ id: userNew._id, usuario: userNew.usuari}, youKnow);
    res.send({
      metodo: true, mensage: "se ha guardado su usuario",
      nombre: userNew.usuari,
      token: token
    });
    return
  }
  res.send({mensaje: "se encontro el usuario", user: user})
})

Router.post('/api/sesiones', async (req, res)=>{
  let op = req.body
  const user = await ModelSesion.findOne({usuarios: op.usuari})
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
