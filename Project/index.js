const express = require("express")
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,"Public"))) //console.log(__dirname) ==> E:\.JS.PY\Javascript\nodejs\Project
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render("index")
})

app.listen(3000,()=>{
    console.log("its running");
})