import express from 'express';
import router from './routes/movies.route.js';
import connectDB from './lib/db.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Data understanting 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Connect DB

connectDB();



app.get('/',(req,res) =>{
    res.json({msg: "Hello students!"});
})


// CRUD functionality
// Client -> Middleware -> Server
app.use('/',router);


app.listen(PORT,() =>{
    console.log(`The server is running at http://localhost:${PORT}`);
});