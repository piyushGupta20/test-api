const express = require('express');

const app = express();

app.get('/:id', (req, res)=>{
console.log("customer id: ", req.params.id)
})

const port = 8000;

app.listen(port, ()=>{
    console.log("port listening on server: ", port)
})