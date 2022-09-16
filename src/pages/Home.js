import React from "react";
import Side_bar from "../components/Side_bar";
import Chat from "../components/Chat";
import "./Home.css"
function Home(){
    return (
        <div className="home">
            <div className="container">
                <Side_bar/>
                <Chat/>
            </div>
        </div>
    );
}

export default Home;