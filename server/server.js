import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app=express()

app.use(express.json())
app.get("/api",(req, res)=>{ //testing function
    console.log("ASD")
    res.json({"users":["userOne","userTwo","userThree"]})
})

app.post("/search",(req,res)=>{
    //req is the response sent to server
    //res is what the server sends back
    //need to get response with serach params
    //parse params and then communicate w/ google api and send back data
   console.log("recieved on search enter "); //show that server got client
   console.log(req.body)
   res.json({"users":["userOne","userTwo","userThree"]})
})
app.listen(5000,()=>{
    console.log("Server started on port 5000")
})