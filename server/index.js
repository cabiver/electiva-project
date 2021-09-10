import express from 'express'
import path from 'path'
const app = express()

app.set('port', process.env.port || 3000)
app.engine('html', require('ejs').renderFile)
app.use(require(path.join(__dirname, 'router/router.js')))

app.listen(app.get('port'), () => {
  console.log(`esta corriendo por el puesto ${app.get('port')} `)
})
