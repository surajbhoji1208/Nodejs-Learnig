const http = require('http');
const express = require('express')
const app = express()

app.use('/product',(req,res,next)=>{
    console.log("this is form middleware 1")
    res.send("<h1>hello from produnct</h1>")

})
app.use('/',(req,res,next)=>{
    console.log("this is from middleware 2");
    res.send("<h1>hello from middleware 2</h1>")
})
app.listen(4000)