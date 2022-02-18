const express = require("express");

const app =  express();

app.get("/",(req, res)=>{
    res.send("server started")
})

app.listen(9000, ()=>{
    console.log("listening on port 9000");
})