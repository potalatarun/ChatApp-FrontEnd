import "./Messages.css";
import Message from "./Message.js";
function Messages(){
    return(
        <div className="messages">
            <Message/>
            <Message/>
            <Message/>
            <Message/>
        </div>
    );
}

export default Messages;