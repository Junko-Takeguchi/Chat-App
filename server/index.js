import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRouter from './Routes/auth.js';
import dotenv from 'dotenv';
import {WebSocketServer} from "ws";
import cookieParser from 'cookie-parser';
import jwt from "jsonwebtoken";
dotenv.config();

const app = express();

const PORT = 3000;
export const secret = process.env.SECRET;

mongoose
    .connect(process.env.URI, { dbName: "Chat-App" })
    .catch((e) => console.log(e));

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));
app.use(cookieParser());
app.use('',authRouter);

const server = app.listen(PORT, () => {
    console.log(`listening on ${PORT}...${typeof process.env.URI}`);
});

const wss = new WebSocketServer({server});

wss.on("connection", (connection, req)=>{
    const urlParams = new URLSearchParams(req.url.split("?")[1]);
    const token = urlParams.get('token');
    jwt.verify(token,secret,{},(err, data)=>{
        if (err){
            console.log(err);
        }
        connection.username = data.username;
    });
    for (const client of [...wss.clients]) {
        client.send(JSON.stringify({
            online: [...wss.clients].map(c => c.username),
        }))
    }
});
