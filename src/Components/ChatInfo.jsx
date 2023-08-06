import { useState } from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import {deepOrange, green, lime} from "@mui/material/colors";

function ChatInfo({ person, isClicked, onClick, isOnline }) {
    if (isOnline){
        return (
            <div
                className="ChatInfoDiv"
                style={isClicked ? { backgroundColor: "#2f2d52", borderRadius: "10px" } : {}}
                onClick={onClick}
            >
                <div className="AvatarWrapper" style={{ backgroundColor: isClicked ? "#dddbf5" : "transparent" }}></div>
                <Avatar sx={{ bgcolor: green[500] }}>{person[0]}</Avatar>
                <Typography variant="h6" sx={{ marginLeft: "3%", color: "#d2d2d9" }}>
                    {person}
                </Typography>
            </div>
        );
    }
    return (
        <div
            className="ChatInfoDiv"
            style={isClicked ? { backgroundColor: "#2f2d52", borderRadius: "10px" } : {}}
            onClick={onClick}
        >
            <div className="AvatarWrapper" style={{ backgroundColor: isClicked ? "#dddbf5" : "transparent" }}></div>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>{person[0]}</Avatar>
            <Typography variant="h6" sx={{ marginLeft: "3%", color: "#d2d2d9" }}>
                {person}
            </Typography>
        </div>
    );
}

export default ChatInfo;
