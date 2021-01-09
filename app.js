const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')

app.use(cors());
app.use(bodyParser.json());
//import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);
//create routes
app.get('/',(req,res)=>{
    res.send('we are successfully on home');
})

//connect to database
mongoose.connect(process.env.CONNECT_DB,
    { useNewUrlParser: true },{ useUnifiedTopology: true },
    ()=>console.log('connected to DataBase')
);



//listening the port 
app.listen(3000);