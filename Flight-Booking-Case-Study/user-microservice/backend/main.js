var app=require('express');
var application=app();
var cors=require('cors');
var jwt=require('jwt-simple');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var User=require('./models/User.js');
application.use(cors());
application.use(bodyParser.json());

//Register User using email and password
application.post('/register',async(req,res)=> 
{ 
    var userData=req.body;
    var user1=await User.findOne({email:userData.email});
    if(!user1)
    {
        var user=new User(userData); 
        user.save((error,result)=> 
        {
            if(error)
                console.log("userdata=",userData);
            console.log('Saved Data Successfully'); 

        })
        var paytoken={};
        var token=jwt.encode(paytoken,'123'); 
        res.status(200).send({token});
        
    }   
    else
    {
        res.status(403).json({error:'Email already in use'});
    }
});


//Login User using email and password
application.post('/login',async (req,res)=>
{ 
    
    var userData=req.body;
    
    var user=await User.findOne({email:userData.email});

    console.log(user);
    if(!user || userData.pwd!=user.pwd)
    {
        res.status(403).send({message:'Email or password Invalid'});
    }   
    else
    {
            var paytoken={};
            var token=jwt.encode(paytoken,'123');
            res.status(200).send({token});
    }
         
});
 
//Connection to MongoDB
const dbURI = 'mongodb+srv://vamsi:vamsi@cluster0.enahx.mongodb.net/myThirdDatabase';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
            .then((result) => application.listen(1000))
            .catch((err) => console.log(err));

module.exports=application;