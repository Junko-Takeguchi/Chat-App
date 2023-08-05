import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Navbar from "./Navbar.jsx";
import {Divider} from "@mui/material";
import {useState} from "react";
import ChatInfo from "./ChatInfo.jsx";
import {useRecoilState} from "recoil";
import {userState} from "../Store/userAtom.js";

function Sidebar({ onlinePeople ,selectedChat, setSelectedChat }) {
    const handleChatClick = (person) => {
        setSelectedChat(person);
    };

    return (
        <div style={{ flex: 1, borderRight: "1px solid #3e3c61", backgroundColor: "#3e3c61", overflow: "hidden", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
            <Navbar></Navbar>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "0" }}>
                {onlinePeople.map((person) => (
                    <ChatInfo
                        key={person}
                        person={person}
                        isClicked={selectedChat === person}
                        onClick={() => handleChatClick(person)}
                    />
                ))}
            </div>
        </div>
    );
}
export default Sidebar;