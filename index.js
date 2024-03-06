const express = require('express');
const app= express();
require('dotenv').config();

app.get('/',(req,res)=>{
    res.send("Hello World!");
})

app.get('/twitter',(req,res)=>{
    res.send("Hello Twitter");
})

app.get('/login',(req,res)=>{
    res.send(`<h1>Login please</h1>`)
})

app.get('/youtube',(req,res)=>{
    res.send(`<h2>Guten tag!</h2>`);
})

app.listen(process.env.PORT,()=>{
    console.log(`App running on ${process.env.PORT}`);
})