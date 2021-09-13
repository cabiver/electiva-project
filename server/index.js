import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import {url} from './baseDatos.js'
import fileupload from 'express-fileupload'


const app = express()
app.use(express.urlencoded({extended: true}));
app.use(express.json()) 
app.use(fileupload())

mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true})
  .then(() => console.log("db is conect"))
  .catch(err=> console.log(err))


app.set('port', process.env.port || 3001)
app.engine('html', require('ejs').renderFile)
app.use('/', express.static(path.join(__dirname, '/publicServer')))
app.use(require(path.join(__dirname, 'router/router.js')))

app.listen(app.get('port'), () => {
  console.log(`esta corriendo por el puesto ${app.get('port')} `)
})
