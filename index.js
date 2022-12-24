const express = require('express')
const dotenv = require('dotenv').config();
const cors = require('cors')
const port = process.env.PORT || 5000

const app = express();

app.use(cors({
    origin: true,
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('Server is running')
})
app.use('/openai', require('./routes/openAiRoutes'))

app.listen(port, () => {
    console.log('Server is running at port', port)
})

module.exports = app;