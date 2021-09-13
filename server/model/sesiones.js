const { Schema, model } = require('mongoose')
const usuari = new Schema({
  usuario: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: new Date() },
  icon: { type: String, default: 'images/camille-300x300.png' },
  libros: []
})
module.exports = model('usuarios', usuari)