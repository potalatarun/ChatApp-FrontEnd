import "./Message.css";
function Message(){
    return(
        <div className = "message owner">
            <div className="messageInfo">
                <img className="img1" src="https://images.pexels.com/photos/12699539/pexels-photo-12699539.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>Hello</p>
                <img className="img2" src="https://images.pexels.com/photos/12699539/pexels-photo-12699539.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
            </div>
        </div>
    );
}

export default Message;