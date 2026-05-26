const express = require('express')
const app = express()

app.listen(3000, ()=> {
    console.log("succesfully connected")
})

app.get('/',(req, res) => {
    res.send("hello world");
})