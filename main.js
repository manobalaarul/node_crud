import express from 'express';

const app = express();
const PORT = 6969;

app.get('/',(req,res) =>{
    res.json({msg: "Hello students!"});
})

// CRUD Functionality of Movies

// R - For Reading
app.get('/movies',()=>{

});

// C - For Creating Movies
app.post('/movies',()=>{

});

// U - For Updating movies
app.put('/movies/:id',()=>{

});

// D - For Deleting movies
app.delete('/movies/:id',()=>{

});

app.listen(PORT,() =>{
    console.log(`The server is running at http://localhost:${PORT}`);
});