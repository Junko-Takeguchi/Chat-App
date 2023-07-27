const mongoose = require('mongoose').default

const userSchema = mongoose.Schema({
    username: String,
    firstName:String,
    lastName:String,
    password: String,
    friends: [{type: mongoose.Types.ObjectId, ref: 'Users'}]
});

const chatSchema = mongoose.Schema({
    message: String,
    senderId: {type: mongoose.Types.ObjectId, ref:'Users'},
    receiverId: {type: mongoose.Types.ObjectId, ref:'Users'},
});

const Users = mongoose.model("users", userSchema);
const Chats = mongoose.model('Chats', chatSchema);

module.exports = {
    Users,
    Chats
}