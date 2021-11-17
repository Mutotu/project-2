const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')

const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)

app.use(express.json())
app.use(require('cors')())

const models = require('./models')
const userRoutes = require('./routes/userRouter')

// Code here


app.use('/user',userRouter)

const PORT = process.env.port || 3001
app.listen(PORT, () => {
  routesReport.print()
})