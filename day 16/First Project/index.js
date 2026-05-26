const express = require('express')
const app = express()

app.listen(3000, ()=> {
    console.log("succesfully connected")
})

app.get('/',(req, res) => {
    res.send("<h1>hello world</h1>");
})

app.get('/about/:userid/book/:bookid',(req, res) => {
    res.send(req.params.bookid);
})

app.get('/Gallery',(req, res) => {
    res.send("<h1>This is Gallery</h1>");
})

app.get('/search',(req, res) =>{
    const name = req.query.name
    const age = req.query.age

    res.send(`Csearch result for name : ${name},age: ${age}`)
})