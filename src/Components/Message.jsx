import Avatar from "@mui/material/Avatar";
import {deepOrange} from "@mui/material/colors";
import Typography from "@mui/material/Typography";

function Message({user}) {
    /*
    * .message {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;

          .messageInfo {
            display: flex;
            flex-direction: column;
            color: gray;
            font-weight: 300;

            img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              object-fit: cover;
            }
          }
          .messageContent {
            max-width: 80%;
            display: flex;
            flex-direction: column;
            gap: 10px;

            p {
              background-color: white;
              padding: 10px 20px;
              border-radius: ;
              max-width: max-content;
            }*/
    return(
        <div className="messageArea" style={{display:"flex", overflow:"scroll", marginBottom: "20px"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"20px"}}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                <Typography variant="body2" color="grey" fontSize="10">Just now</Typography>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", maxWidth:"80%", gap:"10px"}}>
                <Typography variant="body1" sx={{backgroundColor:"white", padding: "10px 20px", wordWrap:"break-word", borderRadius: "0px 10px 10px 10px"}}>Actual msessage</Typography>
            </div>
        </div>
    );
}
export default Message;