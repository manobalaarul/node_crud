import Movie from "../models/movies.model.js";

export const MovieGet =async (req,res)=>{

    try {
        const movie = await Movie.find();
        res.json(movie);
    } catch (error) {
        res.json(500).json({meggase:error.message})
    }

}

export const MoviePost = async (req,res)=>{
    // Create the Movie info
    console.log(req.body);

    // Validate your data.

    const newMovie = new Movie({
        title : req.body.title,
        desc : req.body.desc,
    });



    try {
      const movie = await newMovie.save();
      return res.status(201).json(movie);

    } catch (error) {
        return res.status(400).json({message:error.message});
    }
}

export const MovieDetails = async (req,res)=>{
    try {
        const movie = await Movie.findById(req.params.id);
        if(movie === null){
            return res.status(404).json({message:"Cannot find movie"});
        }
        else{
            res.json(movie);
        }
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const MoviePut = async (req,res)=>{

    try {
        const updatedMovie =  await Movie.findOneAndUpdate({_id:req.params.id},{
            title : req.body.title,
            desc : req.body.desc
        },{new : true}) 
        res.status(200).json(updatedMovie);
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

export const MovieDelete = async (req,res)=>{
    const movieId = req.params.id;

    try {
        await Movie.deleteOne({_id:movieId});
        res.json({message:'Movie Deleted'});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}