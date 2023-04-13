
import  models  from "mongoose";
import Category from "../models/Category.js"

/* export const getCategories=(req,res,next)=>{
    res.render("CategoryView/getCategories",{

        title:"CategoryList",
    });
}; */
/* export const viewCategories=(req,res,next)=>{
    res.render()
} */
export const getCategories= async (req,res,next)=>{
    const categories =await Category.find();
    console.log("categories succesfuully retrieved!!!")
    console.log(categories);
    console.log(typeof(categories));
    res.status(201).render("CategoryView/getCategories",{
        title:"CategoryList",
        categories:{categories},
    })
};
export const getCategoryName= async (req,res,next)=>{
    const categories =await Category.find();
    const categoryName=categories.categoryName;
    console.log("categories succesfuully retrieved!!!")
    console.log(categories);
    console.log(categoryName);
    console.log(typeof(categories));
    res.status(201).render("CategoryView/getCategories",{
        title:"CategoryList",
        categories:{categories},
    })
};

/* export const postCategory= async (req,res,next)=> {
    const categoryName=req.body.categoryName;

 const category=  await Category.create({
        categoryName,
    });
    console.log(category);
    //res.status(201).redirect("/categories");
    //res.status(201).send("created",category);
    res.status(201).json({ category });
}; */
export const postCategory = async (req, res, next) => {
    // Send categoryName to the req.body
    const categoryName = req.body.categoryName;
  
    // create new category with mongoose
    const category = await Category.create({
      categoryName,
    });
  
    console.log(category);
    //   res.status(201).redirect("/categories");
    res.status(201).json({ category });
  };