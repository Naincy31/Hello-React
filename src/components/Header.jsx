import { useState } from "react"; 
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({logo}) => {

    const [btnName, setBtnName] = useState("Login")

    const cartItems = useSelector((store) => store.cart.items)
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <div className="flex justify-between h-20 shadow-sm shadow-gray-100 bg-white">
            <Link to="/">
                <div className="logo-container">
                    <img className="w-20" src={logo}/>
                </div>
            </Link>
            <div className="flex items-center font-semibold">
                <ul className="flex p-4 m-4 hover:cursor-pointer gap-6">
                    <Link to="/search">
                        <li className="hover:text-orange-400">
                            <i className="fa fa-search mx-2"></i>
                            <span className="text-sm">Search</span>
                        </li>
                    </Link>
                    <Link to="/cart" className="hover:text-orange-400">
                        <li className="relative">
                            <span className="absolute bg-black rounded-full -top-1 -left-2 w-4 h-4 text-xs text-center text-white hover:bg-orange-400">{totalQuantity}</span>
                            <i className="fa fa-shopping-cart text-lg mr-2"></i>
                        </li>
                    </Link>
                    <Link to="/login">
                        <button className="hover:text-orange-400" onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                        }}>{btnName}
                        </button>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header;