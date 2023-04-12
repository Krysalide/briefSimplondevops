import express from "express";
import { getHomepage } from "../controllers/homepagecontroller.js";

const routeur=express.Router();
routeur.get("/",getHomepage);

export default routeur;