const express  =require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.static(path.resolve('./build')))


app.get('*',(_,res)=>{
    res.sendFile(path.resolve('./build/index.html'))
})

const PORT = process.env.PORT||5500

app.listen(PORT ,()=>{
    console.log('listen in port ' + PORT)
})

