const express = require('express');
const joi = require('joi')

const routes = express.Router();

routes.get('/', (req, res)=>{
    res.json("Hi")
})


module.exports = routes;