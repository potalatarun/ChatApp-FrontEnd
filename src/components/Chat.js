import "./Chat.css";
import Messages from "./Messages";
import Input from "./Input.js"
function Chat(){
    return(
        <div className="chat">
            <div className="chatInfo">
                <span>UserName</span>
                <div className="chaticons">
                    <img src="Add"/>
                    <img src="Video"/>
                    <img src="Request"/>
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    );
}

export default Chat;