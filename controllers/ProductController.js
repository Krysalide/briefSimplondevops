import models from "mongoose";
import Product from "../models/Product.js";

export const postProduct=async (req,res,next)=>{
    
    const productName=req.body.productName;
    const categoryID=req.body.categoryId;
    const productPrice=req.body.productPrice;
    
    const createproduct=await Product.create({
        productName:productName,ownedbyCategory:categoryID,productPrice:productPrice
    });
    console.log(createproduct);
    res.status(201).json({createproduct});
}

export const getProduct=async(req,res,next)=>{
    const prodBycategory=await Product.find(({ownedbyCategory:'6437f2c73e504a5fdb353b91'}));
    console.log(prodBycategory);
    res.status(201).render("CategoryView/viewProducts",{
        title:"ProductList",
       
        prodBycategory:prodBycategory,
    })
    
   
}

export const updateProduct=async (req,res,next)=>{
    const productName=req.body[0].productName;
    const upProduct=await Product.updateOne({productName:req.body[1].productName},
        {productName:productName});
        console.log("product updated");
        res.status(201).json({upProduct});
}

export const deleteProduct=async (req,res,next)=>{
    const productNameEntered=req.body.productName;
    console.log("Postman body:  "+productNameEntered);
    const deleteProduct=await Product.deleteOne({productName:productNameEntered});


    console.log("delete success!!");
    res.status(201).json({deleteProduct});

}
