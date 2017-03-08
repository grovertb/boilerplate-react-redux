const express = require('express')
const path    = require('path')
const port    = process.env.PORT || 3000
const app     = express()

app.use(express.static(__dirname + '/public'))

app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port, (error) => {
  if (error) console.log(error); // eslint-disable-line no-console
  console.info('server started on port %s.', port); // eslint-disable-line no-console
});
