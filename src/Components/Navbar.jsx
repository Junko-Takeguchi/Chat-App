import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1.js";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Navbar() {
    if (window.innerWidth<=550){
        return (
            <div style={{ width: "100%", height: "8.5%", display: "flex", flexDirection:"column", justifyContent: "space-between", padding: "5px", backgroundColor: "#2e2d51", alignItems: "center" }}>
                <Typography variant={"h6"} sx={{ color: "white", marginLeft: "2%" }}>Chat App</Typography>
                <div style={{ display: "flex" }}>
                    <Button variant="contained"
                            size="small"
                            sx={{ marginRight: "2%" }}
                            onClick={() => {
                                localStorage.removeItem('token');
                                navigate('/');
                            }}
                    >LOGOUT</Button>
                </div>
            </div>
        );
    }
    return (
        <div style={{ width: "100%", height: "8.5%", display: "flex", justifyContent: "space-between", padding: "5px", backgroundColor: "#2e2d51", alignItems: "center" }}>
            <Typography variant={"h6"} sx={{ color: "white", marginLeft: "2%" }}>Chat App</Typography>
            <div style={{ display: "flex" }}>
                <Button variant="contained"
                        size="small"
                        sx={{ marginRight: "2%" }}
                        onClick={() => {
                            localStorage.removeItem('token');
                            navigate('/');
                        }}
                >LOGOUT</Button>
            </div>
        </div>
    );
}

export default Navbar;
