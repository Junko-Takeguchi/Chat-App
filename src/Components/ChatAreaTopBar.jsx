import Typography from "@mui/material/Typography";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Button from "@mui/material/Button";

function ChatAreaTopBar({user}) {
    return(
        <div style={{display:"flex", justifyContent: "space-between", alignItems: "center", backgroundColor:"#5e588c", height:"10%"}}>
            <Typography variant="h6" sx={{color:"#d2d2d9", marginLeft:"1%"}}>{user}</Typography>
            <button className="addFriendBtn" style={{marginRight:"1%"}}>
                <PersonAddAlt1Icon></PersonAddAlt1Icon>
            </button>
        </div>
    );
}
export default ChatAreaTopBar;