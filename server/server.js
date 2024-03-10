import express, { response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import fetch from 'node-fetch';

//AIzaSyDT96oGVCan6TEKn94L9Zs2CyANrDCGWhE
const app=express()

const top5dests=[] //response from text search

app.use(express.json())
// /*
// app.get("/api",(req, res)=>{ //testing function
//     console.log("ASD")
//     res.json({"users":["userOne","userTwo","userThree"]})
// })
// */

app.post("/search",(req,res)=>{ //user searches for location and activity
   let top5DestinationInfo=[] //response from text search
   console.log("recieved on search enter "); //show that server got client
   //still need to add conditionals

   //now send to google text search new on google places api
   fetch("https://places.googleapis.com/v1/places:searchText",{
    method:"POST",
    headers:{
        "Content-Type": "application/json",
        'X-Goog-Api-Key':"AIzaSyDT96oGVCan6TEKn94L9Zs2CyANrDCGWhE", //could prob remove some of field mask for performance
        'X-Goog-FieldMask': 'places.id,places.name,places.displayName,places.formattedAddress,places.priceLevel,places.location,places.editorialSummary,places.photos',
    },
    body: JSON.stringify({
        "textQuery": req.body["search"]+req.body["location"],
        "languageCode":"en"
    })
   }).then((response)=>response.json())
   .then((data)=>{
    for(let i =0; i<5;i++){
        top5DestinationInfo.push({
            "name": data["places"][i]["displayName"]["text"],
        //     "priceLevel":data["places"][i]["priceLevel"],
            "address": data["places"][i]["formattedAddress"],
        //     "latitidue":data["places"][i]["location"]["latitude"],
        //     "longitude":data["places"][i]["location"]["longitude"],
        //     "summary":data["places"][i]["editorialSummary"]["text"],
            // "photoUri":data["places"][i]["photos"][0]["authorAttributions"][0]["photoUri"],
        })
        top5dests.push(data["places"][i]["displayName"]["text"])
    }
    // console.log(top5dests)

    res.json({ "places":top5DestinationInfo})
    // console.log(top5DestinationInfo)
   })
})

//listening on port 5000
app.listen(5000,()=>{
    console.log("Server started on port 5000")
})