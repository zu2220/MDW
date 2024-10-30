import mongoose from 'mongoose';

export const connectDB = async() =>{
    try{
        await mongoose.connect('mongodb+srv://isaaczari60:OeZm3h8nZGgnbvAe@clusteroz.94818.mongodb.net/')
        console.log('La DB está conectada');
    }catch(error){
        console.log(error);
    }

}