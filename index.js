const express = require("express")
const cors = require('cors');


const { connection } = require("./db")
const { carRouter } = require("./Routes/car.routes")

require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors());

app.use("/car",carRouter)

app.get("/",(req,res)=>{
    res.send("welcome")
})


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("runing");
        
    } catch (error) {
        console.log(error);
    }
   
}) 