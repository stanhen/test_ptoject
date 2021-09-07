const express = require('express')
require('./utils/db/mongodb')
const userRouter = require('./utils/routers/user')
const petsRouter = require('./utils/routers/pets')
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(petsRouter)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/dist/'))
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/dist/index.html'))
}



module.exports = app