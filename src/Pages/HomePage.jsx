import Sidebar from "../Components/Sidebar.jsx";
import ChatAreaTopBar from "../Components/ChatAreaTopBar.jsx";
import ChatsDisplayArea from "../Components/ChatsDisplayArea.jsx";
import InputArea from "../Components/InputArea.jsx";
import {useEffect, useState} from "react";
import {useRecoilValue} from "recoil";
import {userState} from "../Store/userAtom.js";

function HomePage() {
    const currentUser = useRecoilValue(userState);
    const [ws, setWs] = useState(null);
    const [onlinePeople, setOnlinePeople] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const ws = new WebSocket(`ws://localhost:3000?token=${token}`);
        setWs(ws);

        const updateOnlinePeople = (msg) => {
            if (msg.online.length !== 0) {
                const onlineSet = new Set(msg.online);
                onlineSet.delete(currentUser.username);
                const tempArr = Array.from(onlineSet);
                setOnlinePeople(tempArr);
            }
        };

        ws.addEventListener('message', (e) => {
            const msg = JSON.parse(e.data);
            updateOnlinePeople(msg);
        });
    }, [currentUser]);
    return (
        <div style={{border: "1px solid white", borderRadius:"5px", width:"100vw", height:"100vh", display: "flex"}}>
            <Sidebar onlinePeople={onlinePeople}></Sidebar>
            <div style={{flex:2, backgroundColor:"#dddbf5"}}>
                <ChatAreaTopBar user="John"></ChatAreaTopBar>
                <ChatsDisplayArea user="John"></ChatsDisplayArea>
                <InputArea></InputArea>
            </div>
        </div>
    );
}
export default HomePage;