import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Navbar from "./Navbar.jsx";
import {Divider} from "@mui/material";
import {useEffect, useState} from "react";
import ChatInfo from "./ChatInfo.jsx";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {userState} from "../Store/userAtom.js";
import axios from "axios";
import {messagesState} from "../Store/messageAtom.js";

function Sidebar({ onlinePeople ,selectedChat, setSelectedChat, isOnline }) {
    const setMessages = useSetRecoilState(messagesState);
    const handleChatClick = (person) => {
        setSelectedChat(person);
    };

    useEffect(()=>{
        if (selectedChat){
            axios.get(`http://localhost:3000/chat/messages/${selectedChat}/${localStorage.getItem('token')}`)
                .then(res => res.data)
                .then((data) => {
                    setMessages(data.map(message => ({
                        senderId: message.senderId,
                        receiverId: message.receiverId,
                        text: message.message,
                        messageId: message._id,
                    })));
                });
        }
    },[selectedChat])

    return (
        <div style={{ flex: 1, borderRight: "1px solid #3e3c61", backgroundColor: "#3e3c61", overflow: "hidden", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
            <Navbar></Navbar>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "0" }}>
                {onlinePeople.map((person) => (
                    <ChatInfo
                        key={person}
                        person={person}
                        isClicked={selectedChat === person}
                        isOnline={isOnline}
                        onClick={() => handleChatClick(person)}
                    />
                ))}
            </div>
        </div>
    );
}
export default Sidebar;