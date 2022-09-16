import "./NavBar.css"
function NavBar(){
    return(
        <div className="navbar">
            <span className="logo">ChatApp</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/6567428/pexels-photo-6567428.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <span>Tarun</span>
                <button>Logout</button>
            </div>
        </div>
    );
}

export default NavBar;