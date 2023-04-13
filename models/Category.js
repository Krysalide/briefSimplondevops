import mongoose, { Schema } from "mongoose";
//import mongoose from "mongoose";
const {Scehma}=mongoose;
const categorySchema=new Schema({
    categoryName:{
        type:String,
        required:true
    },
});

const Category=mongoose.model("category",categorySchema);

export default Category;