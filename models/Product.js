import mongoose, { Schema } from "mongoose";
import Category from "../models/Category.js";

const productSchema=new Schema({
    productName:{
        type:String,
        required:true
    },

    productPrice:{
        type:Number,
        required:true
    },
    ownedbyCategory:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }
});
const Product=mongoose.model('product',productSchema);

export default Product;