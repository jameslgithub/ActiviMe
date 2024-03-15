import express, { response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import fetch from 'node-fetch';

//AIzaSyDT96oGVCan6TEKn94L9Zs2CyANrDCGWhE
const app=express()

const top5dests=[] //response from text search

app.use(express.json())

app.post("/search",(req,res)=>{ //user searches for location and activity
   let top5DestinationInfo=[] //response from text search
   
   console.log("recieved on search enter "); //show that server got client
   //still need to add conditionals
    
   //now send to google text search new on google places api
    async function getTopDest(){
        await fetch("https://places.googleapis.com/v1/places:searchText",{
    method:"POST",
    headers:{
        "Content-Type": "application/json",
        'X-Goog-Api-Key':"AIzaSyDT96oGVCan6TEKn94L9Zs2CyANrDCGWhE", //could prob remove some of field mask for performance
        'X-Goog-FieldMask': 'places.id,places.name,places.displayName,places.formattedAddress,places.priceLevel,places.location,places.editorialSummary,places.photos,places.rating,places.userRatingCount',
    },
    body: JSON.stringify({
        "textQuery": req.body["search"]+" in "+req.body["location"], //in forces a list of all activities may have to parse out user input to prevent further errors
        "languageCode":"en"
    })
   }).then((response)=>response.json())
   .then((data)=>{
    for(let i =0; i<5;i++){
        if (data["places"][i]){
            top5DestinationInfo.push({  //using optional chaining to error check for properties that may or may not exist
                "name": data.places[i]?.displayName?.text,
                "priceLevel":data.places[i]?.priceLevel,
                "address": data.places[i]?.formattedAddress,
                "latitidue":data.places[i]?.location?.latitude,
                "longitude":data.places[i]?.location?.longitude,
                "summary":data.places[i]?.editorialSummary?.text,
                "photoName":data.places[i]?.photos[0]?.name,
                "maxWidth":data.places[i]?.photos[0]?.widthPx,
                "maxHeight":data.places[i]?.photos[0]?.heightPx,
                "rating":data.places[i]?.rating,
                "userRatingCount":data.places[i]?.userRatingCount
            })
            console.log(top5DestinationInfo)
             
    }}})
    console.log(top5DestinationInfo)
    res.json({ "places":top5DestinationInfo})
    }
    getTopDest()  
    }
    )

//listening on port 5000
app.listen(5000,()=>{
    console.log("Server started on port 5000")
})