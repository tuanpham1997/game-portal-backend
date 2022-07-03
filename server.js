const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
require('./config/database')

// Middleware
app.use(express.json())
app.use(cors())
app.use(require('./config/checkToken'))

// Routes
app.use('/api/v1/users', require('./routes/api/users'))

app.use('/api/v1/games', require('./routes/api/games'))

// Port
const PORT = 7000

app.listen(PORT,() => console.log(`App running on port ${PORT}`))