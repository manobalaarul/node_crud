import mongoose from "mongoose"
import dotenv from 'dotenv';
import { MongoClient } from "mongodb";

dotenv.config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

const connectDB = async () => {
   // try {
   //  await mongoose.connect(process.env.MONGODB_URI);
   //  console.log('MongoDb Connected');
   // } catch (error) {
   //  console.error(error.message);
   //  process.exit(1);
   // }

   try {
      await client.connect();
      console.log('MongoDB Connected');
   } catch (error) {
      console.error(error.message);
      process.exit(1);  
   }
}

export default connectDB;