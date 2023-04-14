
import express from 'express';
import { postProduct ,getProduct0,getProduct1,getProduct2,updateProduct,deleteProduct, getProduct3} from "../controllers/ProductController.js";
import Product from "../models/Product.js";
const routeur=express.Router();

routeur.post("/addProduct",postProduct);
routeur.get("/page0",getProduct0);
routeur.get("/page1",getProduct1);
routeur.get("/page2",getProduct2);
routeur.get("/page3",getProduct3);


routeur.put("/updateProduct",updateProduct);
//routeur.delete("/deleteProduct",deleteProduct);
routeur.post("/deleteProduct",deleteProduct);



export default routeur;