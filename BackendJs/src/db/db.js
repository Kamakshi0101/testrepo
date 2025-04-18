import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
const connectdb = async ()=>{
    try{
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDb connected at DB Host: ${connectionInstance.connection.host}`) ;
    }
    catch(error)
    {
        console.log("Mongo database connection error",error);
        process.exit(1)
    }
}
export default connectdb