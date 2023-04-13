import express from "express";
import { getCategories ,postCategory,update,deleteCategory} from "../controllers/CategoryController.js";
import Category from "../models/Category.js";
const routeur=express.Router();
routeur.get("/categories",getCategories);
routeur.post("/add",postCategory);
routeur.put("/update",update);
routeur.delete("/delete",deleteCategory);

/* routeur.post('/delete', function async (req, res) {
    Category.findByIdAndDelete((req.body.id),
        function (err, data) {
            
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
                console.log("Data Deleted!");
            }
        });
}); */


export default routeur;
