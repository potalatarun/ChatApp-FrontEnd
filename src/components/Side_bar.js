import "./Side_bar.css";
import Search from "./Search.js"
import NavBar from "./NavBar.js"
import Chats from "./Chats.js"
function Side_bar(){
    return(
        <div className="sidebar">
            <NavBar/>
            <Search/>
            <Chats/>
        </div>
    );
}

export default Side_bar;