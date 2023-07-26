import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';

function InputArea() {
    return <div style={{height:"8%", backgroundColor:"white", display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"10px"}}>
        <TextField fullWidth placeholder="Type a Message" id="fullWidth" sx={{margin:0, padding:0}}/>
        <button className="sendBtn" style={{paddingLeft:"3%", paddingRight:"3%", height:"100%"}}>
            <SendIcon></SendIcon>
        </button>
    </div>
}
export default InputArea;