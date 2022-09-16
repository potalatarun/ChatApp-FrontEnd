import react from "react"
import add from "../images/Avatar.png"
import "./Register.css"
function Register(){
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <form>
                    <input type="text" placeholder="display name"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={add} alt=""/>
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>Already have an account? Login</p>
            </div>
        </div>
    );
}

export default Register;