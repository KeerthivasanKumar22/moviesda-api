import express from 'express';

const app = express()
const PORT = 8000

app.get('/', (req,res)=>{
    res.json({msg:"Hello Makkalay"})
})


app.listen(PORT, ()=>{
    console.log(`the server is running at http://localhost:${PORT} `)
})