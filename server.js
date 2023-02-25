import express from "express";
import mongoose from "mongoose";


// importing 

// app config
const app = express()
const port=process.env.PORT || 9000
// middleware
//db
const connect_url='mongodb+srv://sparsh123:6cJMRRhgB5cqpB4f@cluster0.72fd7wj.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(connect_url)
//
// api routes
app.get('/',(req,res)=>res.status(200).send("hello"));
//listener
app.listen(port,()=>console.log(`Listening on localhost:$({port}`));