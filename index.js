require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const path=require('path')
require('./db/conn');

app.use(cors());
app.use(express.json({ limit: "10mb" }))

//  Link the router files to make our route easy
app.use(require('./router/auth'));

const PORT = process.env.PORT || 8080

const userModel = require('./model/userSchema');
const productModel= require('./model/productSchema')


app.get('/',(req, res)=>{
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Server is running at port : ${PORT}`)
})