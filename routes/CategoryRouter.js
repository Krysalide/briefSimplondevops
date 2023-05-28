import express from "express";
import { getCategories ,postCategory,update,deleteCategory} from "../controllers/CategoryController.js";
import Category from "../models/Category.js";
const routeur=express.Router();
routeur.get("/categories",getCategories);
routeur.post("/add",postCategory);
routeur.put("/update",update);
routeur.delete("/delete",deleteCategory);


export default routeur;
