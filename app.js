import express  from 'express'
import { join } from 'path'
const path    = require('path')
const port    = process.env.PORT || 3000
const app     = express()

app.use(express.static(__dirname + '/public'))

app.use('/static', express.static(join(__dirname, '/dist')))

app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

export default app
