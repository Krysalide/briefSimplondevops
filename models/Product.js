import mongoose, { Schema } from "mongoose";
//import mongoose from "mongoose";
const {Scehma}=mongoose;
const productSchema=new Schema({
    productName:{
        type:String,
        required:true
    },
});