import express from "express";
import path from "path";
import homepageroutes from "./routes/homepageroutes.js";
import ConnectDB from "./config/ConnectDB.js";
const __dirname=path.resolve();
//const express=require("express");

const app=express();
ConnectDB();
app.set("view engine","ejs");
app.set("views","views");
/* app.use(express.static(path.join(__dirname,"public")));
app.get("/",(req,res)=>{
    res.send("hello world!!");
}); */
app.use(homepageroutes);



app.listen(8082,()=>{
    console.log('Server on port 8082 listening');
});