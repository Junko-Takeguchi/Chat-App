import Avatar from "@mui/material/Avatar";
import {deepOrange} from "@mui/material/colors";
import Typography from "@mui/material/Typography";

function Message({text, owner}) {
    if(owner === null){
        return(
            <div className="messageArea" style={{display:"flex", overflow:"auto", marginBottom: "20px"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"20px"}}>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                    <Typography variant="body2" color="grey" fontSize="10">Just now</Typography>
                </div>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", maxWidth:"60%", gap:"10px"}}>
                    <Typography
                        variant="body1"
                        sx={{backgroundColor:"white", padding: "10px 20px", wordWrap:"break-word", borderRadius: "0px 10px 10px 10px"}}>
                        {text}
                    </Typography>
                </div>
            </div>
        );
    }
    else {
        return(
            <div className="messageArea" style={{display:"flex", overflow:"auto", marginBottom: "20px", flexDirection: "row-reverse"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"20px"}}>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                    <Typography variant="body2" color="grey" fontSize="10">Just now</Typography>
                </div>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", maxWidth:"60%", gap:"10px"}}>
                    <Typography
                        variant="body1"
                        sx={{backgroundColor:"#8fa3ee", color:"white",padding: "10px 20px", wordWrap:"break-word", borderRadius: "10px 10px 0px 10px"}}>
                        {text}
                    </Typography>
                </div>
            </div>
        );
    }
}
export default Message;