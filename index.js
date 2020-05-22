const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.get('/students', db.getStudents)
app.get('/students/:id', db.getStudentsById)
app.post('/students', db.createStudents)
app.put('/students/:id', db.updateStudents)
app.delete('/students/:id', db.deleteStudents)

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

