import "./Search.css"
function Search(){
    return(
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a user"/>
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/6567428/pexels-photo-6567428.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                <div className="userchatinfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    );
}

export default Search;