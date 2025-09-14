// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.end("Hello World")
// })

// server.listen(3000)


// NPM understanding

// node js core me jo install ata hai wo kehlata hai module jo npm se download krte hain wo hota hai package

/*
installing and uninstalling anything basics and advanced
understanding node_modules
dependencies
devdependencies
scripts - understanding default scripts PATH and custom scripts
*/


// import express from 'express'
const express = require('express')


const app = express()

// Middle Ware jo har route pr chlta hai 

app.use((req,res,next)=>{
  console.log("Middle Ware chala");
  next()
})

app.use((req,res,next)=>{
  console.log("Middle Ware Dubara se chala chala");
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/profile',(req,res) => {
    res.send("Me Profile ME Hun")
})

app.get('/home',(req,res,next) => {
    return next(new Error("Something went wrong"))
    // res.send("Me HOME ME Hun")
})

// Error Handling

app.use((err,req,res,next,)=>{
  console.error(err.stack);
  res.status(500).send("Something got broke");
  next()
})


app.listen(3000) 
