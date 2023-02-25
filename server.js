import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";

// importing 

// app config
const app = express()
const port=process.env.PORT || 9000
// middleware
app.use(express.json())
//db
const connect_url='mongodb+srv://sparsh123:6cJMRRhgB5cqpB4f@cluster0.72fd7wj.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(connect_url)
//
// api routes
app.get('/',(req,res)=>res.status(200).send("hello"));

app.get('/messages/sync',(req,res) => {

    Messages.find((err, data) => {
        if (err){
            res.status(500).send(err)

        }
        else{
            res.status(200).send(data)
        }
    })
});












app.post('/messages/new',(req,res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if (err){
            res.status(500).send(err)

        }
        else{
            res.status(201).send(data)
        }
    })
})




//listener
app.listen(port,()=>console.log(`Listening on localhost:$({port}`));