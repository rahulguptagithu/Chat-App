import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config();

const Username = process.env.DB_USERNAME;
const Password = process.env.DB_PASSWORD;
const Connection = async() =>{
 const url =`mongodb://${Username}:${Password}@ac-ukptg78-shard-00-00.gsojlom.mongodb.net:27017,ac-ukptg78-shard-00-01.gsojlom.mongodb.net:27017,ac-ukptg78-shard-00-02.gsojlom.mongodb.net:27017/?ssl=true&replicaSet=atlas-e4tcm1-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
    await mongoose.connect(url , {useUnifiedTopology:true});
    console.log('Database connected sucessesfully');
    }catch(error){
      console.log('Error while connecting with the database' , error.message);
    }
}

export default Connection;