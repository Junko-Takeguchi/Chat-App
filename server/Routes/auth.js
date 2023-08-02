import express from 'express';
import jwt from 'jsonwebtoken';
import {Users} from '../dB/models.js';
import { secret } from "../index.js";

const router = express.Router();

function createToken(USER) {
    const toEncrypt = { username: USER.username };
    return jwt.sign(toEncrypt, secret, { expiresIn: '1h' });
}
const authenticateJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.headers["username"] = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

router.get('/me', authenticateJwt, async (req,res)=>{
    const {username} = req.headers["username"];
    const existingUser = await Users.findOne({username});
    res.status(200).json(existingUser);
});
router.post('/signup', async (req, res) => {
    const { username, firstName, lastName, password } = req.body;
    const existingUser = await Users.findOne({ username });
    if (existingUser) {
        res.status(401).send('existing admin');
    } else {
        const newUser = new Users({
            username,
            firstName,
            lastName,
            password,
        });
        await newUser.save();
        const token = createToken(newUser);
        res.json({
            message: 'User created successfully',
            token,
        });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await Users.findOne({ username:username, password:password });
    if (existingUser) {
        const token = createToken(existingUser);
        req.headers["username"] = username;
        res.json({
            message: 'Logged in successfully',
            token,
        });
    } else {
        res.status(401).send('Invalid credentials');
    }
});


export default router;