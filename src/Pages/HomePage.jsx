import Sidebar from "../Components/Sidebar.jsx";
import {useEffect, useState} from "react";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {userState} from "../Store/userAtom.js";
import InitState from "../Components/InitState.jsx";
import MainArea from "../Components/MainArea.jsx";
import {messagesState} from "../Store/messageAtom.js";

function HomePage() {
    const currentUser = useRecoilValue(userState);
    const [ws, setWs] = useState(null);
    const [onlinePeople, setOnlinePeople] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const setMessages = useSetRecoilState(messagesState);
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 600);

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
            if (msg.online){
                updateOnlinePeople(msg);
            }
            else if ('text' in msg){
                setMessages(prev => ([...prev, {
                    receiver: selectedChat,
                    text: msg.text,
                    messageId: msg.messageId
                }]));
            }
        });
    }, [currentUser]);
    const handleResize = () => {
        setIsSidebarOpen(window.innerWidth >= 600);
    };

    window.addEventListener('resize', handleResize);
    return (
        <div style={{width:"100vw", height:"100vh", display: "flex", overflow: "auto"}}>
            <InitState/>
            <Sidebar onlinePeople={onlinePeople} selectedChat={selectedChat} setSelectedChat={setSelectedChat} isOnline={true} isSidebarOpen={isSidebarOpen}></Sidebar>
            <MainArea ws={ws} selectedChat={selectedChat} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
        </div>
    );
}
export default HomePage;