import mongoose from "mongoose";


const   ConnectDB= async()=>{

    try {
        
    await    mongoose.connect(process.env.MONGODB_URI);
    console.log("connected!!!");
        
    } catch (error) {
       
        console.log("Error",error);

        }
    
};
export default ConnectDB;


