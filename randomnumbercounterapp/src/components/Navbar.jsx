function Navbar(){
    return(
        <>
        <div className="nav">
            <h1>Random Number & Counter App</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="menu">
            <i className="fa-solid fa-bars" style={{color:'black'}}></i>
            </div>
        </div>
        </>
    )
}
export {Navbar} ;