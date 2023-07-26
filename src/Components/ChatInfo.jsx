import {Card, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import {deepOrange} from "@mui/material/colors";

function ChatInfo({user}) {
    return <div className="ChatInfoDiv" style={{}}>
        {/*<Avatar alt={user.firstName} src=user.imageLink/>*/}
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Typography variant="h6" sx={{marginLeft: "3%", color: "#d2d2d9"}}>{user}</Typography>
    </div>
}
export default ChatInfo;