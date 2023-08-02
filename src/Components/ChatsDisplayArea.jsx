import Message from "./Message.jsx";

function ChatsDisplayArea({user}) {
    return(
        <div style={{ height: "80%", overflow:"scroll"}}>
            <Message user={user}></Message>
            <Message user={user}></Message>
            <Message user={user}></Message>
            <Message user={user}></Message>
            <Message user={user}></Message>
            <Message user={user}></Message>
            <Message user={user}></Message>
        </div>
    );
}
export default ChatsDisplayArea;