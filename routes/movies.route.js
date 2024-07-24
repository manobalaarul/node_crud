import express from 'express';
import { MovieDelete, MovieDetails, MovieGet, MoviePost, MoviePut } from '../controllers/movies.controller.js';

const router = express.Router();


// CRUD Functionality of Movies

// R - For Reading
router.get('/movies',MovieGet);

// Particular Read
router.get('/movies/:id',MovieDetails);

// C - For Creating Movies
router.post('/movies',MoviePost);

// U - For Updating movies
router.put('/movies/:id',MoviePut);

// D - For Deleting movies
router.delete('/movies/:id',MovieDelete);

export default router;
