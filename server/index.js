const express = require('express');
const mongoose = require('mongoose').default;
const cors = require('cors');
const jwt = require('jsonwebtoken');
const {Users, Chats} = require('./dB/models');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3000;
const secret = process.env.SECRET;

mongoose.connect(process.env.URI,{useNewUrlParser: true, useUnifiedTopology: true, dbName: "Chat-App" })
    .catch((e)=>console.log(e));

function createToken(USER) {
    const toEncrypt = {username: USER.username};
    return jwt.sign(toEncrypt,secret,{expiresIn: '1h'});
}
app.post('/signup', async (req,res)=>{
    const {username,firstName, lastName, password} = req.body;
    const existingAdmin = await Users.findOne({username});
    if(existingAdmin){
        res.status(401).send('existing admin');
    }
    else{
        const newAdmin = new Users({username: username,firstName:firstName,lastName:lastName, password : password});
        await newAdmin.save();
        const token = createToken(newAdmin);
        res.json({
            message: 'Admin created successfully',
            token
        });
    }
});

app.post('/login', async (req,res)=>{
    const {username, password} = req.body;
    const existingAdmin = await Users.findOne({username: username, password: password});
    if(existingAdmin){
        const token = createToken(existingAdmin);
        res.json({
            message: 'Logged in successfully',
            token
        });
    }
});

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}...`)
})

