import { useState } from "react"; 
import { Link } from "react-router-dom";

const Header = ({logo}) => {

    const [btnName, setBtnName] = useState("Login")

    return (
        <div className="flex justify-between">
            <div className="logo-container">
                <img className="w-24" src={logo}/>
            </div>
            <div className="flex items-center font-semibold">
                <ul className="flex p-4 m-4 hover:cursor-pointer">
                    <li className="mx-2 py-2"><Link to="/">Home</Link></li>
                    <li className="mx-2 py-2"><Link to="/about">About Us</Link></li>
                    <li className="mx-2 py-2">Cart</li>
                    <button className="border px-5 rounded-lg bg-orange-400 text-white" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;