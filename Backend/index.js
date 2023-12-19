const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors');
connectToMongo();


const app = express()
const port = 3001

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello Talha')
})

app.listen(port, () => {
    console.log(`Portfolio is listening http://localhost:${port}`)
})