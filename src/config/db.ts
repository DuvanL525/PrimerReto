import "dotenv/config";
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
<<<<<<< HEAD
        const { connection } = await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'mern_calendar'
            }
        );
        const url = process.env.MONGODB_URL;
        //const connection = await mongoose.connect(url);
=======
        const url =process.env.MONGODB_URL;
        const connection = await mongoose.connect(url);

>>>>>>> 23a3bc36824558161c3e7c0c8a9323698fdefcb5
        console.log('MongoDB conectado');  

    } catch (error) {

        console.log(`Error: ${error.message}`);
        process.exit(1);
        
    }
}