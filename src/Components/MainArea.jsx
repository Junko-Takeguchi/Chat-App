import ChatAreaTopBar from "./ChatAreaTopBar.jsx";
import ChatsDisplayArea from "./ChatsDisplayArea.jsx";
import InputArea from "./InputArea.jsx";

function MainArea({ ws ,selectedChat , isSidebarOpen, setIsSidebarOpen}) {
    return <div style={{flex:2, backgroundColor:"#dddbf5", overflow: "hidden", maxHeight: "100vh"}}>
        <ChatAreaTopBar user={selectedChat} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}></ChatAreaTopBar>
        <ChatsDisplayArea user={selectedChat}></ChatsDisplayArea>
        {!!selectedChat && (
            <InputArea ws={ws} selectedChat={selectedChat}></InputArea>
        )}
    </div>
}
export default MainArea;