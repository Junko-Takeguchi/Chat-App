import {Card, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import {deepOrange} from "@mui/material/colors";

function ChatInfo({person}) {
    return <div className="ChatInfoDiv" style={{}}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Typography variant="h6" sx={{marginLeft: "3%", color: "#d2d2d9"}}>{person}</Typography>
    </div>
}
export default ChatInfo;