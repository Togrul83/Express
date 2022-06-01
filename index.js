const express = require('express')

const fs = require('fs')

const app = express()

app.get("/", (req, res)=>{
    fs.readFile("./test.json","utf-8",(err,data)=>{
        res.send(data)
    })
})


const PORT = 5000
app.listen(PORT, (error)=>{
    if(!error){
        console.log('Server is running in the port', PORT )
    }else{
        console.log('Error Happened')
    }
})