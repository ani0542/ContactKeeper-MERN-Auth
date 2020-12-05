const express=require('express')
var bodyParser = require('body-parser')
const connectDB = require('./config/db')
const app=express()



app.get('/',(req,res)=>{
    res.send('kaisan baa')
})




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())





//connect database

connectDB()




//set up routes

app.use('/api/users',require('./routes/users'))
app.use('/api/auth',require('./routes/auth'))
app.use('/api/contacts',require('./routes/contacts'))



const port=process.env.PORT || 5000



app.listen(port,()=>{
    console.log('server is running at port 5000')
})