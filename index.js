import express from "express";
//const express=require("express");

const app=express();
app.get("/",(req,res)=>{
    res.send("hello world!!");
});

app.listen(8082,()=>{
    console.log('Server on port 8082 listenning');
});