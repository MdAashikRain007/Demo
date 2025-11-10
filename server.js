import express from 'express';
import sum from './sum.js'
const app =express();
const PORT=8080;
app.listen(PORT,(req,res)=>{
    console.log(`App Is Listening On ${PORT}`);
})

app.get('/home', async(req,res)=>{
    res.json({
        mag:"I am Root!"
    })
});

app.get('/getSum/:a/:b',async(req,res)=>{
    const {a,b}=req.params;
    res.json({
        ans:sum(parseInt(a),parseInt(b))
    });
});



