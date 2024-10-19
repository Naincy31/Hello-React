import { useState } from "react"; 
import { Link } from "react-router-dom";
import { useContext } from 'react'
import UserContext from "../utils/context/UserContext";
import { useSelector } from "react-redux";

const Header = ({logo}) => {

    const [btnName, setBtnName] = useState("Login")

    const {loggedInUser} = useContext(UserContext)

    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div className="flex justify-between h-20 shadow-sm shadow-gray-100 bg-white">
            <div className="logo-container">
                <img className="w-20" src={logo}/>
            </div>
            <div className="flex items-center font-semibold">
                <ul className="flex p-4 m-4 hover:cursor-pointer">
                    <li className="mx-2 py-2"><Link to="/">Home</Link></li>
                    <li className="mx-2 py-2"><Link to="/about">About Us</Link></li>
                    <li className="mx-2 py-2">{loggedInUser}</li>
                    <Link to="/cart"><li className="mx-2 py-2 relative"><span className="absolute text-xs bg-orange-400 rounded-full -top-0 -left-2 w-4 h-4 text-center text-white">{cartItems.length}</span><i className="fa fa-shopping-cart text-lg mr-2"></i></li></Link>
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