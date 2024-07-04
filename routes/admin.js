const express = require('express')
const path  = require('path')
const dirNane = require('../util/path')

const routes = express.Router()

routes.use('/add-product', (req, res, next) => {
    res.sendFile(path.join(dirNane,'views','add-product.html'))
});

routes.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = routes
