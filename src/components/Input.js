import "./Input.css";
import Add from "../images/UploadImg.png";
import Attach from "../images/Attach.png"
function Input(){
    return(
        <div className="input">
            <input type="text" placeholder="Type Something"/>
            <div className="send">
                <img src={Attach}/>
                <input type="file" style={{display:"none"}} id="file"/>
                <label htmlFor="file">
                    <img src={Add}/>
                </label>
                <button>Send</button>
            </div>
        </div>
    );
}

export default Input;