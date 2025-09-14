const express = require("express")
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,"Public"))) //console.log(__dirname) ==> E:\.JS.PY\Javascript\nodejs\Project
app.set('view engine', 'ejs')

// app.get('/',(req,res)=>{
//     res.render("index")
// })

app.get('/',(req,res)=>{
    res.render("index");

})
app.get('/profile/:username',(req,res)=>{
    req.params.username;
    res.send(`Welcome, ${req.params.username}`);
})
app.get('/author/:username/:age',(req,res)=>{
    res.send(`Welcome, ${req.params.username} Your Age is ${req.params.age}`);
    // res.send(req.params);
})

app.listen(3000,()=>{
    console.log("its running");
})