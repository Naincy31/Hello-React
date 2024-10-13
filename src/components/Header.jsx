import { useState } from "react"; 

const Header = ({logo}) => {

    const [btnName, setBtnName] = useState("Login")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo}/>
            </div>
            <div className="nav-items">
                <button onClick={() => {
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }} className="login">{btnName}</button>
                <ul>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;