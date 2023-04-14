import express from "express";
import path from "path";
import dotenv from "dotenv";
import homepageroutes from "./routes/homepageroutes.js";
import CategoryRouteur from "./routes/CategoryRouter.js";
import ProductRouteur from "./routes/ProductRouteur.js";
import ConnectDB from "./config/ConnectDB.js";
import bodyParser from 'body-parser';
const __dirname=path.resolve();
//const express=require("express");

const app=express();
app.use(bodyParser.json());
dotenv.config();
ConnectDB();
app.set("view engine","ejs");
app.set("views","views");
app.use(express.static(path.join(__dirname,"public")));
/* app.use(express.static(path.join(__dirname,"public")));
app.get("/",(req,res)=>{
    res.send("hello world!!");
}); */
app.use(homepageroutes);
app.use(CategoryRouteur);
app.use(ProductRouteur);




app.listen(8082,()=>{
    console.log('Server on port 8082 listening');
});