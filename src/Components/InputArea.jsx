import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';
import {useState} from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {messagesState} from "../Store/messageAtom.js";
import {userState} from "../Store/userAtom.js";

function InputArea({ws, selectedChat}) {
    const [textMsg, setTextMsg] = useState('');
    const user = useRecoilValue(userState);
    const setMessages = useSetRecoilState(messagesState);
    return <div style={{height:"8%", backgroundColor:"white", display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:"10px"}}>
        <TextField
            fullWidth
            placeholder="Type a Message"
            id="fullWidth"
            sx={{margin:0, padding:0}}
            value={textMsg}
            autoComplete="off"
            onChange={(e)=>{
                setTextMsg(e.target.value);
        }}/>
        <button className="sendBtn" style={{paddingLeft:"3%", paddingRight:"3%", height:"100%"}} onClick={(e)=>{
            ws.send(JSON.stringify({
                message: {
                    sender: user.username,
                    receiver: selectedChat,
                    text: textMsg
                }
            }))
            setTextMsg('');
            setMessages(prev => ([...prev, {
                receiver: selectedChat,
                text: textMsg,
                messageId: crypto.randomUUID()
            }]))
        }}>
            <SendIcon></SendIcon>
        </button>
    </div>
}
export default InputArea;