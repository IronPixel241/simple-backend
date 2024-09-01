require('dotenv').config()
const express = require('express')

const app = express()   // Ek bohot powerful tool hai

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})