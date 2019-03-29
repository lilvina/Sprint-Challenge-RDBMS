const express = require('express')

const projectRouter = require('./projects-router.js')
// const actionRouter = require('./actions-router.js')

const server = express()


server.use(express.json())
server.use('/api/projects', projectRouter)
// server.use('/api/actions', actionRouter)

server.get('/', (req, res) => {
  res.send('Sprint challenge for RDBMS!')
})

const port = process.env.PORT || 5000
server.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`)
})
