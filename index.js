const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => res.send('hello words'))

app.listen(port,() => console.log(`example app listening at http://localhost:${port}`))