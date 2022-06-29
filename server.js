const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

// Middleware
app.use(express.json())
app.use(cors())


// Port
const PORT = 7000

app.listen(PORT,() => console.log(`App running on port ${PORT}`))