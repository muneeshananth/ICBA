const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const routes = require('./src/routes/routes')

dotenv.config()


const app = express();
const port = 4000 || process.env.PORT;

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

app.get('/health', (req, res)=>{
    res.json("Alive!")
})

app.use('/api', routes)

app.listen(port, ()=>{
    console.log(`API Server Listening on ${port}`)
})
