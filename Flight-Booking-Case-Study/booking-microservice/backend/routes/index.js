const { application } = require('express');



const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
var nodemailer=require('nodemailer');

const bodyParser=require('body-parser');
const { google } = require("googleapis");
const fast2sms=require('fast-two-sms');

require('dotenv').config();
const OAuth2 = google.auth.OAuth2;
require("./S");
const Flight=mongoose.model("Flight");
 
//Connection to MongoDB
const dbURI = 'mongodb+srv://vamsi:vamsi@cluster0.enahx.mongodb.net/myFifthDatabase';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result)=>application.listen(1110))
  .catch((err) => console.log(err));


//Post method for saving the selected Flight details 
router.post('/user/:starting/:ending/:departure/:type1',(req,res)=>
{
    var bookingdata= 
    {
        starting:req.params.starting,
        ending:req.params.ending,
        departure:req.params.departure,
        type1:req.params.type1
    }
    var flight=new Flight(bookingdata);
    flight.save().then(()=>
    {
        console.log("New Flight details Entered");
    })
    .catch((err) => 
    {
        if(err)
        {
            throw err; 
        }
    })
    res.send("New Flight derails created");
});

// Post method for sending the Booking_Id to Customer via SMS
router.post('/sendMessage/:x/:pass',async (req,res)=>{

  pno=req.params.pass;
  console.log(pno);
  const response=fast2sms.sendMessage({authorization: process.env.API_KEY,message:"Booking_Id:"+req.params.x,numbers:[pno]})
  res.send(response);

})

module.exports=router