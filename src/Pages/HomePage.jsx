import Sidebar from "../Components/Sidebar.jsx";
import Navbar from "../Components/Navbar.jsx";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ChatAreaTopBar from "../Components/ChatAreaTopBar.jsx";
import ChatsDisplayArea from "../Components/ChatsDisplayArea.jsx";
import InputArea from "../Components/InputArea.jsx";

function HomePage() {
    /*
    * navbar
    * sidebar
    * chat container
    * input
    * chat display box
    * */
    let drawerWidth = "10vw";
    return (
        <div style={{border: "1px solid white", borderRadius:"5px", width:"100vw", height:"100vh", display: "flex"}}>
            <Sidebar></Sidebar>
            <div style={{flex:2, backgroundColor:"#dddbf5"}}>
                <ChatAreaTopBar user="John"></ChatAreaTopBar>
                <ChatsDisplayArea user="John"></ChatsDisplayArea>
                <InputArea></InputArea>
            </div>
        </div>
    );
}
export default HomePage;