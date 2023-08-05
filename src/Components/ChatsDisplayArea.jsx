import Message from "./Message.jsx";
import Typography from "@mui/material/Typography";
import { useRecoilValue } from "recoil";
import { messagesState } from "../Store/messageAtom.js";
import { useEffect, useState } from "react";

function ChatsDisplayArea({ user }) {
    const messages = useRecoilValue(messagesState);
    const [uniqueMessages, setUniqueMessages] = useState([]);

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

    if (user === null) {
        return (
            <div style={{ height: "80%", overflowY: "auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography variant="h5" sx={{ opacity: 0.5 }}>
                    Select a Chat
                </Typography>
            </div>
        );
    } else {
        console.log(uniqueMessages);
        return (
            <div style={{ height: "80%", overflowY: "scroll" }}>
                {uniqueMessages.map((message) => (
                    <Message key={message.messageId} text={message.text} owner={message.receiver}/>
                ))}
            </div>
        );
    }
}

export default ChatsDisplayArea;
