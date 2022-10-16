const express  =require('express')
const path = require('path')
const cors=require("cors");

const app = express()

app.use(express.json())
app.use(express.static(path.resolve('./build')))
const corsOptions ={
    origin:'*', 
    credentials:true,           
    optionSuccessStatus:200,
 }

app.use(cors(corsOptions))

app.get('*',(_,res)=>{
    res.sendFile(path.resolve('./build/index.html'))
})

const PORT = process.env.PORT||5500

app.listen(PORT ,()=>{
    console.log('listen in port ' + PORT)
})

