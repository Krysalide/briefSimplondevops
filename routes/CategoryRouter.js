import express from "express";
import { getCategories ,postCategory} from "../controllers/CategoryController.js";
const routeur=express.Router();
routeur.get("/categories",getCategories);
routeur.post("/add",postCategory);


export default routeur;
