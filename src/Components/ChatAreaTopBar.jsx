import Typography from "@mui/material/Typography";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Button from "@mui/material/Button";
import ListIcon from '@mui/icons-material/List';

function ChatAreaTopBar({user, isSidebarOpen, setIsSidebarOpen}) {
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return(
        <div style={{display:"flex", justifyContent: "flex-start", alignItems: "center", backgroundColor:"#5e588c", height:"10%"}}>
            <Button className="toggleBtn" size="large" onClick={toggleSidebar}>
                <ListIcon sx={{color: "white"}}/>
            </Button>
            <Typography variant="h6" sx={{color:"#d2d2d9", marginLeft:"1%"}}>{user}</Typography>
        </div>
    );
}
export default ChatAreaTopBar;