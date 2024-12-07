import express from 'express';

const app = express()
const PORT = 8000

app.get('/', (req,res)=>{
    res.json({msg:"Hello Makkalay"})
});

// CRUD functionality of movies



// R - For Reading movie
app.get('/movies', () =>{

})

// C - For Creating movie
app.post('/movies', () =>{
    
})

// U - For Update movie
app.put('/movies', () =>{
    
})

// D - For Deleting movie
app.delete('/movies', () =>{
    
})


app.listen(PORT, ()=>{
    console.log(`the server is running at http://localhost:${PORT} `)
})