const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')
const decksRouter = require('./controllers/decks')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const options = {
  useNewUrlParser: true,
  keepAlive: 1000,
  connectTimeoutMS: 30000,
  useUnifiedTopology: true
}
mongoose.connect(process.env.MONGODB_URI, options)
mongoose.Promise = global.Promise

app.use(bodyParser.json({ limit: '50mb' }))
app.use(express.static('mtg-database-frontend/build'))
app.use(morgan('tiny'))
app.use(cors())
app.use(middleware.logger)
app.use('/api/decks', decksRouter)
app.use(middleware.error)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
