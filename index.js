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
//const bodyParser= require('body-parser');

dotenv.config();
ConnectDB();
app.set("view engine","ejs");
app.set("views","views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")));
/* app.use(express.static(path.join(__dirname,"public")));
app.get("/",(req,res)=>{
    res.send("hello world!!");
}); */
/* const path = require('path');



const rootDir = path.join(__dirname, '/'); */
app.use(homepageroutes);
app.use(CategoryRouteur);
app.use(ProductRouteur);
app.get("/postProduct", function(req, res) {
    res.render("postProduct");
  });





app.listen(8082,()=>{
    console.log('Server on port 8082 listening');
});

/* setTimeout(()=>{
    process.exit(0);
},3000); */