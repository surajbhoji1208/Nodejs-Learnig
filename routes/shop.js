const express = require('express')
const path = require('path')
const dirNane = require('../util/path')

const routes = express.Router()

routes.get('/', (req, res, next) => {
    res.sendFile(path.join(dirNane,'views','shop.html'))
});

module.exports = routes