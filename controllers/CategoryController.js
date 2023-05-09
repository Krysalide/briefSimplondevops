
import  models  from "mongoose";
import Category from "../models/Category.js"

/* export const getCategories=(req,res,next)=>{
    res.render("CategoryView/getCategories",{

        title:"CategoryList",
        //vvvg
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
       
        categories:categories,
    })
};
/* export const getCategoryName= async (req,res,next)=>{
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
}; */
/* export const update=async(req,res,next)=>{
    const categoryId=req.body.categoryId;
    const categoryName=req.body.categoryName;
    const category=await Category.findByIdAndUpdate({
        _id:categoryId,
    {
        categoryName,
    },
        new:true,
    ),

}
    
    
    res.status(200).json({category});

}; */
/* export const update=async (req,res,next)=>{
    const categoryName=req.body.category;
    const updateCategory=await Category.updateOne({categoryName:'updated category'},
    {categoryName:'updated category2'});
    console.log("update success")
}; */
export const update=async (req,res,next)=>{
    const categoryName=req.body[0].categoryName;
    
    console.log("body:  "+categoryName);
    const updateCategory=await Category.updateOne({categoryName:req.body[1].categoryName},
    {categoryName:categoryName});
    console.log("update success");
    res.status(201).json({updateCategory});
};

export const deleteCategory=async (req,res,next)=>{
    const categoryNameEntered=req.body.categoryName;
    console.log("Postman body:  "+categoryNameEntered);
    const deleteCategory=await Category.deleteOne({categoryName:categoryNameEntered});


    console.log("delete success!!");
    res.status(201).json({deleteCategory});

}


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

