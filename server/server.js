import express, { response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
//AIzaSyDT96oGVCan6TEKn94L9Zs2CyANrDCGWhE
const app=express()
const top5dests=[] //response from text search

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

   //now send to google text search new on google places api
   fetch("https://places.googleapis.com/v1/places:searchText",{
    method:"POST",
    headers:{
        "Content-Type": "application/json",
        'X-Goog-Api-Key':"AIzaSyDT96oGVCan6TEKn94L9Zs2CyANrDCGWhE",
        'X-Goog-FieldMask': 'places.id,places.name,places.displayName,places.formattedAddress,places.priceLevel,places.location'
    },
    body: JSON.stringify({
        "textQuery": "Spicy Vegetarian Food in Sydney, Australia",
        "languageCode":"en"
    })
   }).then((response)=>response.json())
   .then((data)=>{
    for(let i =0; i<5;i++){
        top5dests.push(data["places"][i]["displayName"]["text"])
    }
    console.log(top5dests)
   })
   //res.json({"users":["userOne","userTwo","userThree"]})
})
app.listen(5000,()=>{
    console.log("Server started on port 5000")
})