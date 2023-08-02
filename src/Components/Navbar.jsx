import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1.js";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import TextField from "@mui/material/TextField";
import {useState} from "react";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ width: "100%", height: "7%", display: "flex", justifyContent: "space-between", padding: "5px", backgroundColor: "#2e2d51", alignItems: "center" }}>
            <Typography variant={"h6"} sx={{ color: "white", marginLeft: "2%" }}>Chat App</Typography>
            <div style={{ display: "flex" }}>
                <button className="addFriendBtn" style={{ marginRight: "1%" }} onClick={handleClickOpen}>
                    <PersonAddAlt1Icon></PersonAddAlt1Icon>
                </button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Chat with a User</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To start chat with someone enter their username below
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Username"
                            fullWidth
                            variant="standard"
                            value = {username}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={()=>{
                            //Todo: complete the function
                        }}>Add To Chat</Button>
                    </DialogActions>
                </Dialog>
                <Button variant="contained" size="small" sx={{ marginRight: "2%" }}>LOGOUT</Button>
            </div>
        </div>
    );
}

function AddFriendDialogue() {

}

export default Navbar;
