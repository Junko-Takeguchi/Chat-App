import Message from "./Message.jsx";
import Typography from "@mui/material/Typography";
import { useRecoilValue } from "recoil";
import { messagesState } from "../Store/messageAtom.js";
import {useEffect, useRef, useState} from "react";

function ChatsDisplayArea({ user }) {
    const messages = useRecoilValue(messagesState);
    const [uniqueMessages, setUniqueMessages] = useState([]);
    const chatsDisplayRef = useRef(null);

    useEffect(() => {
        // Create a Set to store unique messageIds
        const uniqueMessageIds = new Set();

        // Use the filter function to get unique messages based on messageId
        const filteredMessages = messages.filter((message) => {
            if (!uniqueMessageIds.has(message.messageId)) {
                uniqueMessageIds.add(message.messageId);
                return true;
            }
            return false;
        });

        setUniqueMessages(filteredMessages);
    }, [messages]);
    useEffect(()=>{
        if (chatsDisplayRef.current) {
            chatsDisplayRef.current.scrollTop = chatsDisplayRef.current.scrollHeight;
        }
    }, [uniqueMessages])

    if (user === null) {
        return (
            <div style={{ height: "80%", overflowY: "auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography variant="h5" sx={{ opacity: 0.5 }}>
                    Select a Chat
                </Typography>
            </div>
        );
    } else {
        // console.log(uniqueMessages);
        return (
            <div ref={chatsDisplayRef} style={{ height: "80%", overflowY: "scroll" }}>
                {uniqueMessages.map((message) => {
                    console.log(message.senderId);
                    if(message.senderId !== undefined){
                        return <Message key={message.messageId} text={message.text} senderId={message.senderId} receiver='no receiver'></Message>
                    }
                    else {
                        return <Message key={message.messageId} text={message.text} receiver={message.receiver} senderId='no sender'/>
                    }
                })}
            </div>
        );
    }
}

export default ChatsDisplayArea;
