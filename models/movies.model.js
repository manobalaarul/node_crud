import { model, Schema } from "mongoose";

// Write the schema
const schema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    desc:{
        type:String,
        required:true,
    },
});

// Create your model

const Movie = model("Movies",schema)

export default Movie;