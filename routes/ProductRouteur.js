
import express from 'express';
import { postProduct ,getProduct,updateProduct,deleteProduct} from "../controllers/ProductController.js";
import Product from "../models/Product.js";
const routeur=express.Router();

routeur.post("/addProduct",postProduct);
routeur.get("/prods",getProduct);
routeur.put("/updateProduct",updateProduct);
routeur.delete("/deleteProduct",deleteProduct);

export default routeur;