const express = require('express')
const connectDB = require('./db');
const cors = require('cors');



const app = express();
connectDB();
const port = 3005;

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello syed Talha')
})

app.listen(port, () => {
    console.log(`Portfolio is listening http://localhost:${port}`)
})