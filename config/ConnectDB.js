import mongoose from "mongoose";

//mongodb+srv://christophedelapierresimplon:<password>@clustersimplonchristoph.btp4k2s.mongodb.net/?retryWrites=true&w=majority
const   ConnectDB= async()=>{

    try {
        
    await    mongoose.connect("mongodb+srv://christophedelapierresimplon:DFf0uvbc1bqGUwMj@clustersimplonchristoph.btp4k2s.mongodb.net/?retryWrites=true&w=majority");
    console.log("connected!!!");
        
    } catch (error) {
        console.error("no connection!!!");

        
    }
    


};
export default ConnectDB;


