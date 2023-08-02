import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Navbar from "./Navbar.jsx";
import {Divider} from "@mui/material";
import {useState} from "react";
import ChatInfo from "./ChatInfo.jsx";
import {useRecoilState} from "recoil";
import {userState} from "../Store/userAtom.js";

function Sidebar({onlinePeople}) {

    return <div style={{flex: 1, borderRight: "1px solid #3e3c61", backgroundColor:"#3e3c61", overflow: "hidden", display:"flex", flexDirection:"column"}}>
        <Navbar></Navbar>
        <br/>
        <Divider></Divider>
        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", marginTop:"3%"}}>
            {onlinePeople.map((person)=>{
                return <ChatInfo person={person}></ChatInfo>
            })}
        </div>
    </div>
}
export default Sidebar;