const mongoose =require("mongoose")
const express= require ("express")
const app =express();

require('dotenv').config()

const PORT=process.env.PORT || 4000
// middleware 
app.use(express.json())
const router=require("./routes/schema.js")
app.use("/api/v1",router)

// db connction 

const dbConnect=require("./config/dbConnection");
dbConnect();

app.get("/",(req,res)=>{
    res.send("welcome to homepage")
})
// express server 
app.listen(PORT,(req,res)=>{
    console.log(`servre is running succesfully at ${PORT}`)
})