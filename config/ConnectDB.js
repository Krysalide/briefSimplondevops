import mongoose from "mongoose";

//mongodb+srv://christophedelapierresimplon:<password>@clustersimplonchristoph.btp4k2s.mongodb.net/?retryWrites=true&w=majority
//"mongodb+srv://christophedelapierresimplon:DFf0uvbc1bqGUwMj@clustersimplonchristoph.btp4k2s.mongodb.net/?retryWrites=true&w=majority"
const   ConnectDB= async()=>{

    try {
        
    await    mongoose.connect(process.env.MONGODB_URI);
    console.log("connected!!!");
        
    } catch (error) {
        //console.error("no connection!!!");
        console.log("Error",error);

        
    }
    


};
export default ConnectDB;


